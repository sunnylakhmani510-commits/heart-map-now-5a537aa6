import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-accent" />
                <span className="text-xl font-bold">Heart Health Awareness</span>
              </div>
              <p className="text-sm text-primary-foreground/80">
                Empowering communities with knowledge about heart health and prevention.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a href="https://www.cdc.gov/heartdisease/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                    CDC Heart Disease
                  </a>
                </li>
                <li>
                  <a href="https://www.heart.org/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                    American Heart Association
                  </a>
                </li>
                <li>
                  <a href="https://www.nhlbi.nih.gov/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                    National Heart, Lung, and Blood Institute
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Emergency</h3>
              <p className="text-sm text-primary-foreground/80 mb-2">
                If you're experiencing heart attack symptoms:
              </p>
              <p className="text-2xl font-bold text-accent">Call 911</p>
              <p className="text-xs text-primary-foreground/80 mt-2">
                Every second counts during a heart attack.
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/70">
            <p>
              © {new Date().getFullYear()} Heart Health Awareness. This site provides educational information and is not a substitute for medical advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
