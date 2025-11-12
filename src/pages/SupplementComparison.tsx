import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supplements } from "@/data/supplementsData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const SupplementComparison = () => {
  const navigate = useNavigate();
  const [selectedSupplements, setSelectedSupplements] = useState<string[]>([]);

  const toggleSupplement = (slug: string) => {
    setSelectedSupplements(prev =>
      prev.includes(slug)
        ? prev.filter(s => s !== slug)
        : [...prev, slug]
    );
  };

  const compareData = supplements.filter(s =>
    selectedSupplements.includes(s.slug)
  );

  const getEvidenceColor = (evidence: string) => {
    switch (evidence.toLowerCase()) {
      case "strong":
        return "bg-green-500/20 text-green-700 dark:text-green-300";
      case "moderate":
        return "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300";
      case "limited":
        return "bg-orange-500/20 text-orange-700 dark:text-orange-300";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Compare Supplements
          </h1>
          <p className="text-muted-foreground">
            Select supplements to compare their benefits, dosages, and evidence levels side-by-side
          </p>
        </div>

        {/* Selection Grid */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Select Supplements to Compare</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {supplements.map((supplement) => (
                <div
                  key={supplement.slug}
                  className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer"
                  onClick={() => toggleSupplement(supplement.slug)}
                >
                  <Checkbox
                    checked={selectedSupplements.includes(supplement.slug)}
                    onCheckedChange={() => toggleSupplement(supplement.slug)}
                  />
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{supplement.name}</p>
                    <p className="text-sm text-muted-foreground">{supplement.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Comparison View */}
        {compareData.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">
                Select at least one supplement above to start comparing
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {compareData.map((supplement) => (
              <Card key={supplement.slug} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {supplement.name}
                    <Badge variant="outline">{supplement.category}</Badge>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {supplement.description}
                  </p>
                </CardHeader>
                <CardContent className="flex-1 space-y-6">
                  {/* Evidence Level */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Evidence Level</h3>
                    <Badge className={getEvidenceColor(supplement.evidence)}>
                      {supplement.evidence}
                    </Badge>
                  </div>

                  <Separator />

                  {/* Dosage */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Recommended Dosage</h3>
                    <p className="text-sm text-muted-foreground">{supplement.dosage}</p>
                    {supplement.timing && (
                      <p className="text-sm text-muted-foreground mt-1">
                        <span className="font-medium">Timing:</span> {supplement.timing}
                      </p>
                    )}
                  </div>

                  <Separator />

                  {/* Benefits */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Key Benefits</h3>
                    <ul className="space-y-2">
                      {supplement.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  {/* Precautions */}
                  {supplement.precautions && (
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Precautions</h3>
                      <p className="text-sm text-muted-foreground">{supplement.precautions}</p>
                    </div>
                  )}

                  {/* View Details Link */}
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => navigate(`/supplement/${supplement.slug}`)}
                  >
                    View Full Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SupplementComparison;
