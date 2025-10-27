import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

// Sample data structure - will be replaced with actual Excel data
const sampleHeartData = [
  { lat: 40.7128, lon: -74.0060, location: "New York, NY", cases: 1250, rate: 145 },
  { lat: 34.0522, lon: -118.2437, location: "Los Angeles, CA", cases: 980, rate: 132 },
  { lat: 41.8781, lon: -87.6298, location: "Chicago, IL", cases: 875, rate: 152 },
  { lat: 29.7604, lon: -95.3698, location: "Houston, TX", cases: 720, rate: 138 },
  { lat: 33.4484, lon: -112.0740, location: "Phoenix, AZ", cases: 640, rate: 128 },
];

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isTokenSet, setIsTokenSet] = useState(false);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;

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
        sampleHeartData.forEach((data) => {
          const el = document.createElement("div");
          el.className = "w-8 h-8 bg-accent rounded-full border-4 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform";
          
          const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<div class="p-2">
              <h3 class="font-bold text-base mb-1">${data.location}</h3>
              <p class="text-sm text-gray-600">Heart Attack Cases: ${data.cases}</p>
              <p class="text-sm text-gray-600">Rate per 100k: ${data.rate}</p>
            </div>`
          );

          new mapboxgl.Marker(el)
            .setLngLat([data.lon, data.lat])
            .setPopup(popup)
            .addTo(map.current!);
        });

        toast.success("Map loaded successfully!");
      });

      setIsTokenSet(true);
    } catch (error) {
      toast.error("Failed to initialize map. Please check your token.");
      console.error(error);
    }
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken);
      toast.success("Mapbox token set!");
    } else {
      toast.error("Please enter a valid Mapbox token");
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
              Heart Attack Data by Location
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore heart attack statistics in your area
            </p>
          </div>

          {!isTokenSet && (
            <Card className="mb-8 border-primary/50 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Setup Required
                </CardTitle>
                <CardDescription>
                  Enter your Mapbox public token to view the interactive map.{" "}
                  <a 
                    href="https://mapbox.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    Get your token here
                  </a>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="pk.eyJ1IjoieW91ciB0b2tlbiBoZXJlLi4u"
                    value={mapboxToken}
                    onChange={(e) => setMapboxToken(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={handleTokenSubmit} className="bg-primary">
                    Set Token
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

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
              style={{ opacity: isTokenSet ? 1 : 0.3 }}
            />
          </Card>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {sampleHeartData.reduce((sum, d) => sum + d.cases, 0).toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Total Cases Tracked</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-secondary mb-2">
                  {sampleHeartData.length}
                </div>
                <div className="text-sm text-muted-foreground">Locations Monitored</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-accent mb-2">
                  {Math.round(sampleHeartData.reduce((sum, d) => sum + d.rate, 0) / sampleHeartData.length)}
                </div>
                <div className="text-sm text-muted-foreground">Avg Rate per 100k</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
