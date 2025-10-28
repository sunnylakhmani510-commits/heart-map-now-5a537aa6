import HeroSection from "@/components/HeroSection";
import CDCFacts from "@/components/CDCFacts";
import InteractiveMap from "@/components/InteractiveMap";
import DataCharts from "@/components/DataCharts";
import Supplements from "@/components/Supplements";
import Footer from "@/components/Footer";
import AdSenseUnit from "@/components/AdSenseUnit";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CDCFacts />
      <AdSenseUnit adSlot="1234567890" />
      <InteractiveMap />
      <AdSenseUnit adSlot="1234567891" />
      <DataCharts />
      <AdSenseUnit adSlot="1234567892" />
      <Supplements />
      <Footer />
    </div>
  );
};

export default Index;
