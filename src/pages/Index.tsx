import HeroSection from "@/components/HeroSection";
import CDCFacts from "@/components/CDCFacts";
import InteractiveMap from "@/components/InteractiveMap";
import DataCharts from "@/components/DataCharts";
import Supplements from "@/components/Supplements";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CDCFacts />
      <InteractiveMap />
      <DataCharts />
      <Supplements />
      <Footer />
    </div>
  );
};

export default Index;
