import { Activity, AlertTriangle, Heart, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const facts = [
  {
    icon: Heart,
    title: "Leading Cause of Death",
    description: "Heart disease is the leading cause of death in the United States, responsible for about 1 in 5 deaths.",
    source: "CDC, 2024"
  },
  {
    icon: AlertTriangle,
    title: "Warning Signs",
    description: "Heart attack symptoms can include chest pain, shortness of breath, cold sweats, nausea, and lightheadedness.",
    source: "American Heart Association"
  },
  {
    icon: Activity,
    title: "Risk Factors",
    description: "High blood pressure, high cholesterol, smoking, diabetes, and obesity significantly increase heart attack risk.",
    source: "CDC Heart Disease Facts"
  },
  {
    icon: TrendingUp,
    title: "Survival Rates",
    description: "About 90% of people who have a heart attack survive if they receive immediate medical attention.",
    source: "American Heart Association, 2024"
  }
];

const CDCFacts = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="mx-auto max-w-6xl text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Heart Attack Facts & Statistics
          </h2>
          <p className="text-lg text-muted-foreground">
            Critical information from the CDC and American Heart Association
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mx-auto max-w-7xl">
          {facts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <Card 
                key={index} 
                className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">{fact.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{fact.description}</p>
                  <p className="text-xs font-medium text-primary">{fact.source}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 mx-auto max-w-4xl">
          <Card className="border-accent/50 bg-gradient-to-r from-accent/5 to-accent/10">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-accent/20 p-3">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Time Is Muscle</h3>
                  <p className="text-muted-foreground mb-4">
                    Every minute counts during a heart attack. The faster you get treatment, 
                    the better your chances of survival and limiting heart damage. 
                    Call 911 immediately if you experience heart attack symptoms.
                  </p>
                  <p className="text-sm font-semibold text-accent">
                    Don't wait – act fast and save a life!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CDCFacts;
