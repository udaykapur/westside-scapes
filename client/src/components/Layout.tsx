import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  // 1. Get the base path for the logo
  const base = import.meta.env.BASE_URL;

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Areas Served", href: "/areas-served" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-secondary text-secondary-foreground py-2 text-sm hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex gap-6">
            <a href="tel:0401845945" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={14} /> 0401 845 945
            </a>
            <a href="mailto:contact@westsidescapes.com.au" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={14} /> contact@westsidescapes.com.au
            </a>
          </div>
          <div className="flex gap-4">
            <span className="flex items-center gap-2">
              <MapPin size={14} /> Serving Western Melbourne
            </span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          
          {/* LOGO REPLACEMENT START */}
          <Link href="/" className="flex items-center gap-2">
            {/* 
               If you want ONLY the logo image:
            */}
            <img 
              src={`${base}images/logo.png`} 
              alt="Westside Scapes Logo" 
              className="h-12 w-auto object-contain" // Adjust h-12 to your preferred size
            />
            
            {/* 
               If you want Image + Text, keep this line below. 
               If you only want the image, delete the span. 
            */}
            <span className="font-serif font-bold text-2xl text-primary hidden sm:block">
              Westside Scapes
            </span>
          </Link>
          {/* LOGO REPLACEMENT END */}

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === item.href ? "text-primary font-bold" : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold">
                Get a Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background p-4 shadow-lg absolute w-full">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className={cn(
                    "text-base font-medium py-2 border-b border-border/50",
                    location === item.href ? "text-primary" : "text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="mt-2">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold">
                  Get a Quote
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-white">Westside Scapes</h3>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Transforming outdoor spaces across Western Melbourne for over 4 years. We bring your landscaping vision to life with quality craftsmanship and local expertise.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Gardening Tips</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/landscaping-design" className="hover:text-primary transition-colors">Landscaping Design</Link></li>
              <li><Link href="/services/paving" className="hover:text-primary transition-colors">Paving</Link></li>
              <li><Link href="/services/turf" className="hover:text-primary transition-colors">Natural & Artificial Turf</Link></li>
              <li><Link href="/services/screening" className="hover:text-primary transition-colors">Screening & Fencing</Link></li>
              <li><Link href="/services/garden-beds" className="hover:text-primary transition-colors">Garden Beds</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Serving Western Melbourne & Surrounds</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:0401845945" className="hover:text-primary transition-colors">0401 845 945</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:contact@westsidescapes.com.au" className="hover:text-primary transition-colors">contact@westsidescapes.com.au</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Westside Scapes. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}