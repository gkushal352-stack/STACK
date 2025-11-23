import { Card } from "@/components/ui/card";
import { 
  Zap, 
  Factory, 
  Shield, 
  Trees, 
  Building2, 
  Car, 
  HardHat, 
  Mountain, 
  Wheat, 
  Home, 
  Siren 
} from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    { icon: Zap, name: "Energy & Utilities", href: "#energy" },
    { icon: Factory, name: "Oil & Gas", href: "#oil-gas" },
    { icon: Shield, name: "Defense", href: "#defense" },
    { icon: Trees, name: "Forestry & Conservation", href: "#forestry" },
    { icon: Building2, name: "Government & Public Agencies", href: "#government" },
    { icon: Car, name: "Infrastructure & Transportation", href: "#infrastructure" },
    { icon: HardHat, name: "Construction & Engineering", href: "#construction" },
    { icon: Mountain, name: "Mining & Aggregates", href: "#mining" },
    { icon: Wheat, name: "Precision Agriculture", href: "#agriculture" },
    { icon: Home, name: "Property Development", href: "#property" },
    { icon: Siren, name: "Public Safety", href: "#safety" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card" id="industries">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground">
            Delivering full-scale aerial solutions across diverse industries with experts who understand 
            your unique challenges and tailor solutions specifically for your sector.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <a
              key={industry.name}
              href={industry.href}
              className="group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Card className="p-6 text-center hover:shadow-glow hover:border-primary/50 transition-all duration-300 cursor-pointer h-full flex flex-col items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                  {industry.name}
                </h3>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
