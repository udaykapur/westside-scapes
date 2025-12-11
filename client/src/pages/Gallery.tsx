import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Gallery() {
  const images = [
    { src: "images/hero-backyard.jpg", alt: "Modern Backyard Transformation", category: "Design" },
    { src: "images/service-paving.jpg", alt: "Bluestone Paving Pathway", category: "Paving" },
    { src: "images/service-turf.jpg", alt: "Lush Instant Turf Installation", category: "Turf" },
    { src: "images/service-screening.jpg", alt: "Timber Slat Screening", category: "Fencing" },
    { src: "images/service-garden-beds.jpg", alt: "Native Garden Bed Design", category: "Gardens" },
    // Duplicating for grid fullness in this demo
    { src: "images/hero-backyard.jpg", alt: "Decking and Lawn Combo", category: "Design" },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Banner */}
      <div className="bg-secondary text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Work</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Browse our portfolio of completed projects across Western Melbourne.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                  <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2">{img.category}</span>
                  <h3 className="text-xl font-serif font-bold">{img.alt}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30 text-center">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold mb-6 text-secondary">Like What You See?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We can achieve similar results for your property. Let's discuss your project today.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold">
              Get a Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}