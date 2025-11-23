import { Card } from "@/components/ui/card";
import { Plane, Radar, Satellite, GraduationCap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Radar,
      title: "Drone Inspections",
      description: "High-quality, cost-effective drone-based imaging, video, and data for analysis, surveying, mapping, and asset inspections.",
      color: "text-primary",
    },
    {
      icon: Satellite,
      title: "Lidar Services",
      description: "Advanced aerial, terrestrial, bathymetric, and subsurface data collection using the latest lidar technology.",
      color: "text-accent",
    },
    {
      icon: Plane,
      title: "Aviation",
      description: "Fixed-wing and rotary surveillance operations ensuring your assets are protected and monitored with precision.",
      color: "text-primary",
    },
    {
      icon: GraduationCap,
      title: "Drone Training",
      description: "Comprehensive training programs with flexible online and in-person options for pilots at all skill levels.",
      color: "text-accent",
    },
  ];

  return (
    <section className="py-24 bg-background" id="services">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Services We Provide
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover our diverse range of drone and aviation services tailored to meet your exact needs. 
            Each service is designed to optimize efficiency, accuracy, and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="p-6 hover:shadow-glow transition-all duration-300 group cursor-pointer border-border bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${service.color}`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
