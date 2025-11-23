import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Linkedin, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const services = [
    { name: "Drone Inspections", href: "#inspections" },
    { name: "Lidar Services", href: "#lidar" },
    { name: "Aviation Services", href: "#aviation" },
    { name: "Drone Training", href: "#training" },
    { name: "Equipment Sales", href: "#equipment" },
  ];

  const industries = [
    { name: "Energy & Utilities", href: "#energy" },
    { name: "Oil & Gas", href: "#oil-gas" },
    { name: "Defense", href: "#defense" },
    { name: "Construction", href: "#construction" },
    { name: "Public Safety", href: "#safety" },
    { name: "Agriculture", href: "#agriculture" },
  ];

  const divisions = [
    { name: "Volatus Unmanned Services", href: "https://connexicore.com" },
    { name: "Volatus Drones Canada", href: "https://volatusdrones.ca" },
    { name: "Volatus Drones", href: "https://volatusdrones.com" },
    { name: "Volatus Aérospatial", href: "https://www.mvtgeosolutions.com" },
    { name: "Drone Delivery Canada", href: "https://dronedeliverycanada.com" },
    { name: "Canadian Air National", href: "https://www.airnational.ca" },
    { name: "Synergy Aviation", href: "https://synergyaviation.ca" },
    { name: "iRed", href: "https://ired.co.uk" },
    { name: "UAVHUB", href: "https://www.uavhub.com" },
    { name: "The Drone Mentor", href: "https://www.thedronementor.com" },
    { name: "Drones In Ed", href: "https://www.dronesined.com" },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Drone Pilot Application", href: "#pilot-application" },
    { name: "News & Resources", href: "#news" },
    { name: "Contact Us", href: "#contact" },
    { name: "Privacy Policy", href: "#privacy" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="font-heading font-bold text-2xl mb-4">
                <span className="text-primary">VOLATUS</span>
                <br />
                <span className="text-foreground">AEROSPACE</span>
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your trusted partner for aerial intelligence solutions across North America and beyond.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm uppercase tracking-wider">Newsletter</h4>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-background border-border"
                />
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 shrink-0">
                  Subscribe
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm uppercase tracking-wider">Contact</h4>
              <div className="space-y-2 text-sm">
                <a href="tel:1-833-865-2887" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>1-833-VOLATUS</span>
                </a>
                <a href="mailto:info@volatusaerospace.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>info@volatusaerospace.com</span>
                </a>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>North America Wide Operations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services & Industries */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Our Services</h4>
              <ul className="space-y-2">
                {services.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Industries</h4>
              <ul className="space-y-2">
                {industries.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Volatus Group Divisions */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">The Volatus Group</h4>
            <ul className="space-y-2">
              {divisions.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <a 
                  href="https://www.linkedin.com/company/volatus-aerospace" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Volatus Aerospace Corp. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#accessibility" className="text-muted-foreground hover:text-primary transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
