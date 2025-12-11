import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "landscaping-design",
      title: "Landscaping Design",
      description: "Comprehensive design services to plan your perfect outdoor sanctuary before construction begins.",
      image: "images/hero-backyard.jpg"
    },
    {
      id: "paving",
      title: "Paving",
      description: "Expert installation of driveways, paths, and patios using bluestone, concrete, or brick pavers.",
      image: "images/service-paving.jpg"
    },
    {
      id: "turf",
      title: "Natural & Artificial Turf",
      description: "Premium instant lawn installation or high-quality synthetic turf for a green lawn year-round.",
      image: "images/service-turf.jpg"
    },
    {
      id: "screening",
      title: "Screening & Fencing",
      description: "Stylish privacy solutions including timber slat screening, colorbond, and feature fencing.",
      image: "images/service-screening.jpg"
    },
    {
      id: "garden-beds",
      title: "Garden Beds",
      description: "Soil preparation, planting, mulching, and edging to create vibrant, healthy garden beds.",
      image: "images/service-garden-beds.jpg"
    },
    {
      id: "retaining-walls",
      title: "Retaining Walls",
      description: "Functional and decorative retaining walls built from timber, concrete sleepers, or blockwork.",
      image: "images/service-retaining-walls.jpg"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Banner */}
      <div className="bg-secondary text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Services</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Professional landscaping solutions tailored to your needs in Western Melbourne.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-secondary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href={`/services/${service.id}`} className="w-full">
                    <Button variant="outline" className="w-full group border-primary text-primary hover:bg-primary hover:text-white">
                      View Details <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Not sure what you need?</h2>
          <p className="text-lg mb-8 opacity-90">
            We can visit your property in Western Melbourne to discuss your options and provide expert advice.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold">
              Book a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}