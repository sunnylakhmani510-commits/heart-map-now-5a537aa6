export interface StrokeDataPoint {
  year: string;
  locationAbbr: string;
  locationDesc: string;
  geographicLevel: string;
  dataValue: number | null;
  dataValueUnit: string;
  sex: string;
  raceEthnicity: string;
  locationId: string;
  lat: number;
  lon: number;
}

export const parseStrokeCSV = async (csvPath: string): Promise<StrokeDataPoint[]> => {
  try {
    const response = await fetch(csvPath);
    const text = await response.text();
    const lines = text.split('\n');
    const data: StrokeDataPoint[] = [];

    // Skip header
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      const values = parseCSVLine(line);
      if (values.length < 14) continue;

      const dataValue = values[5] ? parseFloat(values[5]) : null;
      const lat = parseFloat(values[12]);
      const lon = parseFloat(values[13]);

      if (!isNaN(lat) && !isNaN(lon) && dataValue !== null) {
        data.push({
          year: values[0],
          locationAbbr: values[1],
          locationDesc: values[2],
          geographicLevel: values[3],
          dataValue,
          dataValueUnit: values[6],
          sex: values[8],
          raceEthnicity: values[10],
          locationId: values[11],
          lat,
          lon,
        });
      }
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
    locationDesc: string;
  }>();

  data.forEach(point => {
    const key = point.locationDesc;
    if (!locationMap.has(key)) {
      locationMap.set(key, {
        totalValue: 0,
        count: 0,
        lat: point.lat,
        lon: point.lon,
        locationDesc: point.locationDesc,
      });
    }
    
    const entry = locationMap.get(key)!;
    entry.totalValue += point.dataValue || 0;
    entry.count += 1;
  });

  return Array.from(locationMap.values()).map(entry => ({
    location: entry.locationDesc,
    avgRate: Math.round(entry.totalValue / entry.count),
    count: entry.count,
    lat: entry.lat,
    lon: entry.lon,
  }));
};
