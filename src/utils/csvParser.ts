export interface StrokeDataPoint {
  year: string;
  state: string;
  city: string;
  dataValue: number | null;
  dataValueUnit: string;
  sex: string;
  race: string;
  lat: number;
  lon: number;
}

const MAPBOX_TOKEN = "pk.eyJ1Ijoic3VubnlsYWwiLCJhIjoiY21oOTlyaXlnMGxteDJscTFrN3h2dWd0aiJ9.6LC5SfaxU5-l6K2RMlrszg";

// Cache for geocoded locations
const geocodeCache = new Map<string, { lat: number; lon: number }>();

const geocodeLocation = async (city: string, state: string): Promise<{ lat: number; lon: number } | null> => {
  const key = `${city}, ${state}`;
  
  if (geocodeCache.has(key)) {
    return geocodeCache.get(key)!;
  }

  try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(key)}.json?access_token=${MAPBOX_TOKEN}&country=US&types=place`
    );
    const data = await response.json();
    
    if (data.features && data.features.length > 0) {
      const [lon, lat] = data.features[0].center;
      const coords = { lat, lon };
      geocodeCache.set(key, coords);
      return coords;
    }
    return null;
  } catch (error) {
    console.error('Geocoding error:', error);
    return null;
  }
};

export const parseStrokeCSV = async (csvPath: string): Promise<StrokeDataPoint[]> => {
  try {
    const response = await fetch(csvPath);
    const text = await response.text();
    const lines = text.split('\n');
    const data: StrokeDataPoint[] = [];

    // Skip header (first line)
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      const values = parseCSVLine(line);
      if (values.length < 7) continue;

      // Format: Year,State,City,Data_Value,Data_Value_Unit,Sex,Race
      const year = values[0];
      const state = values[1];
      const city = values[2];
      const dataValueStr = values[3];
      const dataValueUnit = values[4];
      const sex = values[5];
      const race = values[6];

      // Only process "Overall" sex and race to reduce geocoding calls
      if (sex !== 'Overall' || race !== 'Overall') continue;

      const dataValue = dataValueStr ? parseFloat(dataValueStr) : null;
      if (dataValue === null || isNaN(dataValue)) continue;

      // Geocode the city, state combination
      const coords = await geocodeLocation(city, state);
      if (!coords) continue;

      data.push({
        year,
        state,
        city,
        dataValue,
        dataValueUnit,
        sex,
        race,
        lat: coords.lat,
        lon: coords.lon,
      });
    }

    return data;
  } catch (error) {
    console.error('Error parsing CSV:', error);
    return [];
  }
};

// Helper to parse CSV line with proper quote handling
const parseCSVLine = (line: string): string[] => {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current);
  return result;
};

export const aggregateDataByLocation = (data: StrokeDataPoint[]) => {
  const locationMap = new Map<string, {
    totalValue: number;
    count: number;
    lat: number;
    lon: number;
  }>();

  data.forEach(point => {
    const key = `${point.city}, ${point.state}`;
    if (!locationMap.has(key)) {
      locationMap.set(key, {
        totalValue: 0,
        count: 0,
        lat: point.lat,
        lon: point.lon,
      });
    }
    
    const entry = locationMap.get(key)!;
    entry.totalValue += point.dataValue || 0;
    entry.count += 1;
  });

  return Array.from(locationMap.entries()).map(([location, entry]) => ({
    location,
    avgRate: Math.round(entry.totalValue / entry.count),
    count: entry.count,
    lat: entry.lat,
    lon: entry.lon,
  }));
};
