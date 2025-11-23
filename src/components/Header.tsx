import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const services = [
    { name: "Drone Inspections", href: "#inspections" },
    { name: "Lidar Services", href: "#lidar" },
    { name: "Aviation Services", href: "#aviation" },
    { name: "Drone Training", href: "#training" },
  ];

  const industries = [
    { name: "Energy & Utilities", href: "#energy" },
    { name: "Oil & Gas", href: "#oil-gas" },
    { name: "Defense", href: "#defense" },
    { name: "Forestry & Conservation", href: "#forestry" },
    { name: "Government & Public Agencies", href: "#government" },
    { name: "Infrastructure & Transportation", href: "#infrastructure" },
    { name: "Construction & Engineering", href: "#construction" },
    { name: "Mining & Aggregates", href: "#mining" },
    { name: "Precision Agriculture", href: "#agriculture" },
    { name: "Property Development", href: "#property" },
    { name: "Public Safety", href: "#safety" },
  ];

  const divisions = [
    { name: "Volatus Unmanned Services", href: "#unmanned" },
    { name: "Volatus Drones", href: "#drones" },
    { name: "Drone Delivery Canada", href: "#delivery" },
    { name: "Canadian Air National", href: "#air-national" },
    { name: "Synergy Aviation", href: "#synergy" },
    { name: "The Drone Mentor", href: "#mentor" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="font-heading font-bold text-2xl tracking-tight">
              <span className="text-primary">VOLATUS</span>
              <span className="text-foreground"> AEROSPACE</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <a href="#about" className="nav-link">About</a>
            
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="nav-link flex items-center gap-1">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-elevated p-4 animate-in fade-in slide-in-from-top-2">
                  {services.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 hover:bg-secondary rounded-md transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown("industries")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="nav-link flex items-center gap-1">
                Industries <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "industries" && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-lg shadow-elevated p-4 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2">
                  {industries.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-sm hover:bg-secondary rounded-md transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown("divisions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="nav-link flex items-center gap-1">
                Our Divisions <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "divisions" && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-elevated p-4 animate-in fade-in slide-in-from-top-2">
                  {divisions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 hover:bg-secondary rounded-md transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#equipment" className="nav-link">Equipment</a>
            <a href="#news" className="nav-link">News</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:1-833-865-2887" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">1-833-VOLATUS</span>
            </a>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border py-4 animate-in slide-in-from-top">
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="mobile-nav-link">About</a>
              
              <div className="mobile-nav-section">
                <div className="mobile-nav-label">Services</div>
                {services.map((item) => (
                  <a key={item.name} href={item.href} className="mobile-nav-link pl-6">
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="mobile-nav-section">
                <div className="mobile-nav-label">Industries</div>
                {industries.slice(0, 6).map((item) => (
                  <a key={item.name} href={item.href} className="mobile-nav-link pl-6">
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="mobile-nav-section">
                <div className="mobile-nav-label">Our Divisions</div>
                {divisions.slice(0, 4).map((item) => (
                  <a key={item.name} href={item.href} className="mobile-nav-link pl-6">
                    {item.name}
                  </a>
                ))}
              </div>

              <a href="#equipment" className="mobile-nav-link">Equipment</a>
              <a href="#news" className="mobile-nav-link">News</a>
              
              <div className="pt-4 space-y-3">
                <a href="tel:1-833-865-2887" className="flex items-center gap-2 px-4 py-2 text-primary font-semibold">
                  <Phone className="w-4 h-4" />
                  1-833-VOLATUS
                </a>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  Get a Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      <style>{`
        .nav-link {
          @apply px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-secondary/50;
        }
        .mobile-nav-link {
          @apply block px-4 py-2 text-sm hover:bg-secondary rounded-md transition-colors;
        }
        .mobile-nav-section {
          @apply py-2;
        }
        .mobile-nav-label {
          @apply px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider;
        }
      `}</style>
    </header>
  );
};

export default Header;
