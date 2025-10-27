import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const supplements = [
  {
    name: "Omega-3 Fatty Acids",
    description: "EPA and DHA from fish oil help reduce triglycerides, lower blood pressure, and decrease inflammation.",
    dosage: "1,000-3,000mg daily",
    evidence: "Strong",
    sources: [
      { name: "American Heart Association", url: "https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/fats/fish-and-omega-3-fatty-acids" },
      { name: "NIH Office of Dietary Supplements", url: "https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/" }
    ]
  },
  {
    name: "Coenzyme Q10 (CoQ10)",
    description: "Powerful antioxidant that supports heart muscle function and may help with heart failure and statin side effects.",
    dosage: "100-200mg daily",
    evidence: "Strong",
    sources: [
      { name: "Mayo Clinic", url: "https://www.mayoclinic.org/drugs-supplements-coenzyme-q10/art-20362602" },
      { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/articles/17750-coenzyme-q10-coq10" }
    ]
  },
  {
    name: "Magnesium",
    description: "Essential mineral for heart rhythm, blood pressure regulation, and reducing risk of cardiovascular disease.",
    dosage: "300-400mg daily",
    evidence: "Strong",
    sources: [
      { name: "NIH Magnesium Fact Sheet", url: "https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/" },
      { name: "Harvard Health", url: "https://www.health.harvard.edu/staying-healthy/getting-your-magnesium" }
    ]
  },
  {
    name: "Vitamin D",
    description: "Deficiency linked to increased cardiovascular disease risk. Supports heart health and immune function.",
    dosage: "1,000-2,000 IU daily",
    evidence: "Moderate",
    sources: [
      { name: "NIH Vitamin D", url: "https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/" },
      { name: "Johns Hopkins Medicine", url: "https://www.hopkinsmedicine.org/health/wellness-and-prevention/vitamin-d-and-your-health" }
    ]
  },
  {
    name: "L-Carnitine",
    description: "Amino acid that helps transport fatty acids for energy production in heart cells. May improve exercise capacity.",
    dosage: "500-2,000mg daily",
    evidence: "Moderate",
    sources: [
      { name: "Mount Sinai", url: "https://www.mountsinai.org/health-library/supplement/carnitine-l-carnitine" },
      { name: "NIH L-Carnitine", url: "https://ods.od.nih.gov/factsheets/Carnitine-HealthProfessional/" }
    ]
  },
  {
    name: "Garlic Extract",
    description: "May help lower blood pressure and cholesterol. Contains compounds that support cardiovascular health.",
    dosage: "600-1,200mg daily",
    evidence: "Moderate",
    sources: [
      { name: "NIH Garlic", url: "https://www.nccih.nih.gov/health/garlic" },
      { name: "WebMD Garlic", url: "https://www.webmd.com/vitamins/ai/ingredientmono-300/garlic" }
    ]
  },
  {
    name: "Hawthorn",
    description: "Traditional herb for heart health. May improve blood flow and help with mild heart failure symptoms.",
    dosage: "160-900mg daily",
    evidence: "Moderate",
    sources: [
      { name: "NIH Hawthorn", url: "https://www.nccih.nih.gov/health/hawthorn" },
      { name: "University of Michigan Health", url: "https://www.uofmhealth.org/health-library/hn-2127002" }
    ]
  },
  {
    name: "B-Complex Vitamins",
    description: "B6, B9 (folate), and B12 help regulate homocysteine levels, which is important for heart health.",
    dosage: "As directed (varies by B vitamin)",
    evidence: "Moderate",
    sources: [
      { name: "NIH B Vitamins", url: "https://ods.od.nih.gov/factsheets/VitaminB12-HealthProfessional/" },
      { name: "Harvard T.H. Chan", url: "https://www.hsph.harvard.edu/nutritionsource/vitamins/vitamin-b/" }
    ]
  },
  {
    name: "Red Yeast Rice",
    description: "Contains naturally occurring statins. May help lower cholesterol but consult doctor if on statin medications.",
    dosage: "1,200-2,400mg daily",
    evidence: "Moderate",
    sources: [
      { name: "Mayo Clinic", url: "https://www.mayoclinic.org/drugs-supplements-red-yeast-rice/art-20363074" },
      { name: "NIH Red Yeast Rice", url: "https://www.nccih.nih.gov/health/red-yeast-rice" }
    ]
  },
  {
    name: "Fiber Supplements",
    description: "Psyllium and other soluble fibers help lower LDL cholesterol and support heart health.",
    dosage: "5-10g daily",
    evidence: "Strong",
    sources: [
      { name: "American Heart Association", url: "https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/nutrition-basics/fiber" },
      { name: "Harvard Health", url: "https://www.health.harvard.edu/nutrition/should-i-be-taking-a-fiber-supplement" }
    ]
  },
  {
    name: "Niacin (Vitamin B3)",
    description: "Can help raise HDL (good) cholesterol and lower triglycerides. High doses require medical supervision.",
    dosage: "14-16mg daily (RDA)",
    evidence: "Moderate",
    sources: [
      { name: "NIH Niacin", url: "https://ods.od.nih.gov/factsheets/Niacin-HealthProfessional/" },
      { name: "Mayo Clinic", url: "https://www.mayoclinic.org/drugs-supplements-niacin/art-20364984" }
    ]
  },
  {
    name: "Potassium",
    description: "Essential for heart rhythm and blood pressure control. Helps counteract sodium's effects.",
    dosage: "2,600-3,400mg daily",
    evidence: "Strong",
    sources: [
      { name: "NIH Potassium", url: "https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/" },
      { name: "American Heart Association", url: "https://www.heart.org/en/health-topics/high-blood-pressure/changes-you-can-make-to-manage-high-blood-pressure/how-potassium-can-help-control-high-blood-pressure" }
    ]
  },
  {
    name: "Berberine",
    description: "Plant compound that may help lower cholesterol, blood sugar, and support overall cardiovascular health.",
    dosage: "900-1,500mg daily",
    evidence: "Emerging",
    sources: [
      { name: "Cleveland Clinic", url: "https://health.clevelandclinic.org/berberine-supplement" },
      { name: "Mount Sinai", url: "https://www.mountsinai.org/health-library/supplement/berberine" }
    ]
  },
  {
    name: "Alpha-Lipoic Acid",
    description: "Powerful antioxidant that may help protect blood vessels and improve endothelial function.",
    dosage: "300-600mg daily",
    evidence: "Emerging",
    sources: [
      { name: "NIH Alpha-Lipoic Acid", url: "https://ods.od.nih.gov/factsheets/AlphaLipoicAcid-HealthProfessional/" },
      { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-767/alpha-lipoic-acid" }
    ]
  },
  {
    name: "Turmeric/Curcumin",
    description: "Anti-inflammatory properties may support heart health by reducing inflammation and oxidative stress.",
    dosage: "500-2,000mg daily",
    evidence: "Emerging",
    sources: [
      { name: "NIH Turmeric", url: "https://www.nccih.nih.gov/health/turmeric" },
      { name: "Johns Hopkins Medicine", url: "https://www.hopkinsmedicine.org/health/wellness-and-prevention/turmeric-spice" }
    ]
  },
  {
    name: "Resveratrol",
    description: "Antioxidant found in red wine and grapes. May have cardioprotective effects.",
    dosage: "150-500mg daily",
    evidence: "Emerging",
    sources: [
      { name: "Harvard Health", url: "https://www.health.harvard.edu/staying-healthy/resveratrol-the-hype-continues" },
      { name: "Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/heart-disease/expert-answers/red-wine/faq-20058281" }
    ]
  },
  {
    name: "Plant Sterols/Stanols",
    description: "Naturally occurring compounds that help block cholesterol absorption in the intestines.",
    dosage: "2g daily",
    evidence: "Strong",
    sources: [
      { name: "American Heart Association", url: "https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/fats/plant-sterols-and-stanols" },
      { name: "NIH Plant Sterols", url: "https://ods.od.nih.gov/factsheets/Phytosterols-HealthProfessional/" }
    ]
  },
  {
    name: "Taurine",
    description: "Amino acid that supports heart function, may help lower blood pressure and reduce heart failure risk.",
    dosage: "500-2,000mg daily",
    evidence: "Emerging",
    sources: [
      { name: "Mount Sinai", url: "https://www.mountsinai.org/health-library/supplement/taurine" },
      { name: "Cleveland Clinic", url: "https://health.clevelandclinic.org/taurine-benefits" }
    ]
  },
  {
    name: "Grape Seed Extract",
    description: "Rich in antioxidants that may help improve circulation and lower blood pressure.",
    dosage: "100-300mg daily",
    evidence: "Emerging",
    sources: [
      { name: "Mount Sinai", url: "https://www.mountsinai.org/health-library/supplement/grape-seed-extract" },
      { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-1009/grape" }
    ]
  },
  {
    name: "Nattokinase",
    description: "Enzyme from fermented soybeans that may help with blood circulation and cardiovascular health.",
    dosage: "100-200mg daily",
    evidence: "Emerging",
    sources: [
      { name: "Mount Sinai", url: "https://www.mountsinai.org/health-library/supplement/nattokinase" },
      { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-1084/nattokinase" }
    ]
  }
];

const Supplements = () => {
  const getEvidenceBadgeColor = (evidence: string) => {
    switch (evidence) {
      case "Strong":
        return "bg-secondary text-secondary-foreground";
      case "Moderate":
        return "bg-primary/70 text-primary-foreground";
      case "Emerging":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="supplements" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Heart Health Supplements
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Evidence-based supplements that may support cardiovascular health. 
              Always consult your healthcare provider before starting any supplement regimen.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {supplements.map((supplement, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{supplement.name}</CardTitle>
                    <Badge className={getEvidenceBadgeColor(supplement.evidence)}>
                      {supplement.evidence}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm">
                    <span className="font-semibold text-primary">Dosage:</span> {supplement.dosage}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {supplement.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground">Sources:</p>
                    {supplement.sources.map((source, idx) => (
                      <a
                        key={idx}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-primary hover:underline group"
                      >
                        <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                        {source.name}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 border-accent/50 bg-gradient-to-r from-accent/5 to-accent/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Important Safety Information</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Always consult with your healthcare provider before starting any supplement, especially if you have existing health conditions or take medications.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Supplements can interact with medications, particularly blood thinners, blood pressure medications, and cholesterol-lowering drugs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Quality matters - choose supplements from reputable manufacturers with third-party testing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Supplements are not a substitute for a healthy diet, regular exercise, and prescribed medications.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Supplements;
