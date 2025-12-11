import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  // 1. Get the base path (e.g., "/westside-scapes/")
  const base = import.meta.env.BASE_URL;

  return (
    <div className="flex flex-col w-full">
      {/* Hero Banner */}
      <div className="bg-secondary text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Westside Scapes</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Your trusted local landscaping partners in Western Melbourne.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                /* 2. Use the base variable here */
                src={`${base}images/service-paving.jpg`}
                alt="Detailed paving work by Westside Scapes" 
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-serif font-bold mb-6 text-secondary">Turning Visions into Reality</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At Westside Scapes, we believe that a beautiful garden is more than just plants and paving—it's an extension of your home and a space for making memories.
                </p>
                <p>
                  For over 4 years, our dedicated team has been successfully delivering stunning outdoor spaces across the Melbourne Western Suburbs. We pride ourselves on our ability to listen to our clients' needs and translate their ideas into practical, beautiful landscapes that stand the test of time.
                </p>
                <p>
                  Whether you're looking for a complete garden overhaul, a new entertainment area, or a low-maintenance solution, we bring the same level of passion, precision, and professionalism to every project.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Local Western Suburbs Experts",
                  "Quality Materials & Workmanship",
                  "Transparent Communication",
                  "Timely Project Delivery"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 font-medium text-secondary">
                    <CheckCircle2 size={18} className="text-primary" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold">
                    Start Your Project
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4 text-secondary">Our Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-bold mb-3 text-primary">Craftsmanship</h3>
              <p className="text-muted-foreground">
                We don't cut corners. Every paver laid, every plant planted, and every fence built is done with attention to detail and pride in our work.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-bold mb-3 text-primary">Reliability</h3>
              <p className="text-muted-foreground">
                We show up when we say we will, communicate clearly throughout the project, and respect your property and time.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-bold mb-3 text-primary">Sustainability</h3>
              <p className="text-muted-foreground">
                We prioritize native plants and sustainable materials where possible to create gardens that thrive in the Melbourne climate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}