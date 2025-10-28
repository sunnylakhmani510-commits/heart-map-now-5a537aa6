import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { parseStrokeCSV, aggregateDataByLocation } from "@/utils/csvParser";
import csvData from "@/data/stroke-mortality-data.csv?url";

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [strokeData, setStrokeData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const MAPBOX_TOKEN = "pk.eyJ1Ijoic3VubnlsYWwiLCJhIjoiY21oOTlyaXlnMGxteDJscTFrN3h2dWd0aiJ9.6LC5SfaxU5-l6K2RMlrszg";

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const data = await parseStrokeCSV(csvData);
      const aggregated = aggregateDataByLocation(data);
      setStrokeData(aggregated);
      setIsLoading(false);
    };
    loadData();
  }, []);

  useEffect(() => {
    if (strokeData.length > 0 && !map.current) {
      initializeMap();
    }
  }, [strokeData]);

  const initializeMap = () => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/light-v11",
        center: [-98.5795, 39.8283], // Center of US
        zoom: 3.5,
      });

      map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

      map.current.on("load", () => {
        // Add markers for each location
        strokeData.forEach((data) => {
          const el = document.createElement("div");
          el.className = "w-8 h-8 bg-accent rounded-full border-4 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform";
          
          const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<div class="p-2">
              <h3 class="font-bold text-base mb-1">${data.location}</h3>
              <p class="text-sm text-gray-600">Data Points: ${data.count}</p>
              <p class="text-sm text-gray-600">Avg Rate per 100k: ${data.avgRate}</p>
            </div>`
          );

          new mapboxgl.Marker(el)
            .setLngLat([data.lon, data.lat])
            .setPopup(popup)
            .addTo(map.current!);
        });

        toast.success("Map loaded successfully with real data!");
      });
    } catch (error) {
      toast.error("Failed to initialize map. Please check your token.");
      console.error(error);
    }
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast.error("Please enter a location");
      return;
    }
    
    // This will be enhanced with actual geocoding
    toast.info(`Searching for: ${searchQuery}`);
  };

  return (
    <section id="map-section" className="py-20 bg-background">
      <div className="container px-4">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Stroke Mortality Data by Location
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore stroke mortality statistics across the United States
            </p>
          </div>


          <div className="mb-6">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter zip code, city, or county..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="pl-10"
                />
              </div>
              <Button onClick={handleSearch} className="bg-primary">
                Search
              </Button>
            </div>
          </div>

          <Card className="overflow-hidden">
            <div 
              ref={mapContainer} 
              className="w-full h-[600px] rounded-lg"
            />
          </Card>

          {!isLoading && strokeData.length > 0 && (
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {strokeData.reduce((sum, d) => sum + d.count, 0).toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Data Points</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-secondary mb-2">
                    {strokeData.length.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Locations Tracked</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-accent mb-2">
                    {Math.round(strokeData.reduce((sum, d) => sum + d.avgRate, 0) / strokeData.length)}
                  </div>
                  <div className="text-sm text-muted-foreground">Avg Rate per 100k</div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
