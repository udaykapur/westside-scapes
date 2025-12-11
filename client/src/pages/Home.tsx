import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Star, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const services = [
    {
      title: "Landscaping Design",
      description: "Custom garden designs that blend functionality with aesthetic appeal to transform your outdoor space.",
      icon: "🎨",
      link: "/services/landscaping-design"
    },
    {
      title: "Paving",
      description: "Durable and stylish paving solutions for driveways, patios, and pathways using high-quality materials.",
      icon: "🧱",
      link: "/services/paving"
    },
    {
      title: "Natural & Artificial Turf",
      description: "Lush, green lawns installed to perfection, whether you prefer low-maintenance synthetic or fresh natural grass.",
      icon: "🌱",
      link: "/services/turf"
    },
    {
      title: "Screening & Fencing",
      description: "Privacy solutions that look great, from timber slat screening to colorbond fencing.",
      icon: "fence",
      link: "/services/screening"
    },
    {
      title: "Garden Beds",
      description: "Vibrant, low-maintenance garden beds with native plants, mulch, and professional edging.",
      icon: "🌻",
      link: "/services/garden-beds"
    },
    {
      title: "Retaining Walls",
      description: "Structural and decorative retaining walls to maximize your usable garden space.",
      icon: "🏗️",
      link: "/services/retaining-walls"
    }
  ];

  const suburbs = [
    "Deer Park", "Caroline Springs", "Burnside", "Ravenhall", 
    "Derrimut", "Cairnlea", "Albanvale", "Kings Park", 
    "St Albans", "Sunshine", "Sunshine West", "Ardeer", 
    "Albion", "Keilor Downs"
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="images/hero-backyard.jpg" 
            alt="Stunning backyard landscaping in Western Melbourne" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container relative z-10 text-center text-white px-4 drop-shadow-md">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight drop-shadow-xl text-white">
            Transforming Western Melbourne <br/> One Garden at a Time
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-lg text-white font-medium">
            Professional landscaping services tailored to your lifestyle. 
            Quality craftsmanship, local expertise, and stunning results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6 h-auto">
                Get a Free Quote
              </Button>
            </Link>
            <Link href="/gallery">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white font-bold text-lg px-8 py-6 h-auto backdrop-blur-sm">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>

        {/* Curve Divider */}
        <div className="curve-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">4+ Years Experience</h3>
              <p className="text-muted-foreground">Dedicated local team delivering quality results across Western Melbourne.</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <Star size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
              <p className="text-muted-foreground">We use premium materials and proven techniques for lasting beauty.</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Local Experts</h3>
              <p className="text-muted-foreground">Specializing in Western Suburbs soil conditions and climate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-secondary">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive landscaping solutions to enhance your property's value and appeal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.link}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-none shadow-md">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="text-4xl mb-6">{service.icon === "fence" ? <span className="text-primary text-3xl font-bold">|||</span> : service.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-secondary">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-grow">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary font-medium group">
                      Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">Why Choose Westside Scapes?</h2>
              <p className="text-lg mb-6 text-gray-300">
                Our dedicated team has been successfully delivering stunning outdoor spaces across the Melbourne Western Suburbs for over 4 years.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Personalized design approach tailored to your vision",
                  "Transparent pricing with no hidden costs",
                  "Timely project completion and clean site management",
                  "Expert knowledge of local plants and materials"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-8">
                  About Our Team
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="images/service-garden-beds.jpg" 
                alt="Westside Scapes team work quality" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-20 bg-background">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-secondary">Proudly Serving Western Melbourne</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            We are your local landscaping specialists, providing top-tier services to homeowners across these suburbs:
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {suburbs.map((suburb, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-secondary hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
              >
                {suburb}
              </span>
            ))}
          </div>
          
          <div className="mt-12">
            <Link href="/areas-served">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                View Service Area Map
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-grid-lg"></div>
        <div className="container relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to Transform Your Garden?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for a free consultation and quote. Let's bring your vision to life.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-10 py-6 h-auto shadow-lg">
              Get a Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}