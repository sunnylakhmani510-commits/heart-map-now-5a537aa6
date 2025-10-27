import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToMap = () => {
    document.getElementById("map-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djhhNCA0IDAgMCAwIDQgNGg4YTQgNCAwIDAgMC00LTRWMTZhNCA0IDAgMCAwLTQtNGgtOGE0IDQgMCAwIDAgNCA0em0tOCA4di04YTQgNCAwIDAgMC00LTRoLThhNCA0IDAgMCAwIDQgNHY4YTQgNCAwIDAgMCA0IDRoOGE0IDQgMCAwIDAtNC00em0wIDIwdjhhNCA0IDAgMCAwIDQgNGg4YTQgNCAwIDAgMC00LTR2LThhNCA0IDAgMCAwLTQtNGgtOGE0IDQgMCAwIDAgNCA0em0tOCA4di04YTQgNCAwIDAgMC00LTRoLThhNCA0IDAgMCAwIDQgNHY4YTQgNCAwIDAgMCA0IDRoOGE0IDQgMCAwIDAtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container relative z-10 px-4 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-accent/20 px-6 py-2 backdrop-blur-sm">
            <Heart className="mr-2 h-5 w-5 text-accent-foreground" />
            <span className="text-sm font-semibold text-accent-foreground">Cardiovascular Health Awareness</span>
          </div>
          
          <h1 className="mb-6 text-5xl font-bold leading-tight text-primary-foreground md:text-7xl lg:text-8xl">
            Stroke Mortality in Your{" "}
            <span className="text-accent">Community</span>
          </h1>
          
          <p className="mb-8 text-xl text-primary-foreground/90 md:text-2xl">
            Understanding stroke patterns across the United States. 
            Explore the data in your area and learn about cardiovascular health.
          </p>
          
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-transform hover:scale-105">
              <div className="mb-2 text-4xl font-bold text-accent-foreground">160,000+</div>
              <div className="text-sm text-primary-foreground/80">Stroke deaths annually in the US</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-transform hover:scale-105">
              <div className="mb-2 text-4xl font-bold text-accent-foreground">1 in 6</div>
              <div className="text-sm text-primary-foreground/80">Deaths from cardiovascular disease is due to stroke</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-transform hover:scale-105">
              <div className="mb-2 text-4xl font-bold text-accent-foreground">87%</div>
              <div className="text-sm text-primary-foreground/80">Of strokes are ischemic strokes</div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button 
              size="lg" 
              onClick={scrollToMap}
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6"
            >
              Explore Your Area
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById("supplements")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white/10 text-primary-foreground border-primary-foreground/30 hover:bg-white/20 text-lg px-8 py-6 backdrop-blur-sm"
            >
              Heart Health Supplements
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-8 w-0.5 bg-primary-foreground/50"></div>
      </div>
    </section>
  );
};

export default HeroSection;
