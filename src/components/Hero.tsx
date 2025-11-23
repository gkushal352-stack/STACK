import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-aerospace.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Aerial drone over landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl">
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-700">
            <p className="text-primary text-lg font-medium tracking-wide uppercase">
              Aerial Intelligence Solutions
            </p>
            
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
              The Sky Is Not
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                the Limit
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-bold text-foreground/90">
              It's Where We Begin...
            </p>

            <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
              Leading innovator in aerial intelligence solutions, seamlessly merging cutting-edge 
              technology with specialized expertise for unmatched operational efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-8 py-6 shadow-glow group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
