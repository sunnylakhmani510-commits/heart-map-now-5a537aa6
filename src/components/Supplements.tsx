import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { supplements } from "@/data/supplementsData";

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
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
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
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {supplement.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <p className="text-xs font-semibold text-foreground">Sources:</p>
                    {supplement.sources.slice(0, 2).map((source, idx) => (
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
                  <Link to={`/supplement/${supplement.slug}`} className="mt-auto">
                    <Button variant="outline" className="w-full group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
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
