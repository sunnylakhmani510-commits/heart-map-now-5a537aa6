import { useParams, Link } from "react-router-dom";
import { supplements } from "@/data/supplementsData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ExternalLink, CheckCircle, AlertTriangle } from "lucide-react";
import Footer from "@/components/Footer";
import { getEvidenceBadgeColor } from "@/utils/supplementUtils";

const SupplementDetail = () => {
  const { slug } = useParams();
  const supplement = supplements.find(s => s.slug === slug);

  if (!supplement) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Supplement Not Found</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6 sticky top-0 z-10 shadow-md">
        <div className="container px-4">
          <Link to="/#supplements">
            <Button variant="ghost" className="mb-4 text-primary-foreground hover:bg-primary-foreground/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Supplements
            </Button>
          </Link>
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">{supplement.name}</h1>
              <p className="text-lg opacity-90">{supplement.description}</p>
            </div>
            <Badge className={getEvidenceBadgeColor(supplement.evidence) + " text-lg px-4 py-2"}>
              {supplement.evidence} Evidence
            </Badge>
          </div>
        </div>
      </header>

      <main className="container px-4 py-12 max-w-5xl">
        {/* Quick Info Card */}
        <Card className="mb-8 border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Quick Reference</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-primary">Recommended Dosage</h3>
              <p className="text-muted-foreground">{supplement.dosage}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-primary">Evidence Level</h3>
              <p className="text-muted-foreground">
                {supplement.evidence} - Based on current clinical research
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Description */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">About {supplement.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {supplement.detailedDescription}
            </p>
          </CardContent>
        </Card>

        {/* Detailed Dosage Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">How Much to Take</CardTitle>
            <CardDescription>Detailed dosing guidelines and timing</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {supplement.detailedDosage}
            </p>
          </CardContent>
        </Card>

        {/* Benefits */}
        <Card className="mb-8 bg-secondary/5">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-secondary" />
              Potential Benefits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {supplement.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Precautions */}
        <Card className="mb-8 bg-accent/5 border-accent/20">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-accent" />
              Important Precautions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {supplement.precautions.map((precaution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{precaution}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        {/* Primary Sources */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Primary Research Sources</CardTitle>
            <CardDescription>Authoritative sources for this supplement information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {supplement.sources.map((source, index) => (
                <a
                  key={index}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors group"
                >
                  <ExternalLink className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                  <span className="font-medium text-foreground">{source.name}</span>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Additional Resources */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Learn More</CardTitle>
            <CardDescription>Additional resources and detailed information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {supplement.additionalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors group"
                >
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  <span className="text-muted-foreground group-hover:text-foreground">{link.name}</span>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="border-accent/50 bg-gradient-to-r from-accent/5 to-accent/10">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-3 text-foreground">Medical Disclaimer</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The information provided is for educational purposes only and should not be considered medical advice. 
              Always consult with a qualified healthcare provider before starting any supplement regimen, especially if 
              you have existing health conditions, are pregnant or nursing, or are taking medications. Supplements can 
              interact with medications and may not be appropriate for everyone. Your healthcare provider can help determine 
              the right supplements and dosages for your individual needs.
            </p>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="mt-12 text-center">
          <Link to="/#supplements">
            <Button size="lg" className="text-lg">
              <ArrowLeft className="mr-2 h-5 w-5" />
              View All Heart Health Supplements
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SupplementDetail;
