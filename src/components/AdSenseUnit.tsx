import { useEffect } from "react";

interface AdSenseUnitProps {
  adSlot: string;
  adFormat?: string;
  className?: string;
}

const AdSenseUnit = ({ adSlot, adFormat = "auto", className = "" }: AdSenseUnitProps) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  return (
    <div className={`flex justify-center my-8 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-6087412660457662"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSenseUnit;
