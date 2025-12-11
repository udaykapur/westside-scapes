import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin, Check } from "lucide-react";
import { MapView } from "@/components/Map";

export default function AreasServed() {
  // 1. Get the base path
  const base = import.meta.env.BASE_URL;

  const suburbs = [
    "Deer Park", "Caroline Springs", "Burnside", "Ravenhall", 
    "Derrimut", "Cairnlea", "Albanvale", "Kings Park", 
    "St Albans", "Sunshine", "Sunshine West", "Ardeer", 
    "Albion", "Keilor Downs"
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Banner */}
      <div className="bg-secondary text-white py-20 relative overflow-hidden">
        {/* Optional: If you want a background image here, uncomment this block: */}
        {/* 
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src={`${base}images/hero-backyard.jpg`} 
            alt="Service Area" 
            className="w-full h-full object-cover"
          />
        </div> 
        */}
        <div className="container text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Areas Served</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Proudly providing landscaping services to Western Melbourne suburbs.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-secondary">Local Landscaping Experts</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Westside Scapes is a locally owned and operated business. We understand the specific soil conditions, climate challenges, and council regulations of Western Melbourne. This local knowledge ensures your garden will not only look great but thrive for years to come.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We service a wide range of suburbs in the West. If your suburb isn't listed below but is nearby, please give us a call to check if we can help.
              </p>

              <h3 className="text-xl font-bold mb-4 text-secondary">Our Service Area Includes:</h3>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {suburbs.map((suburb, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span>{suburb}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold">
                  Check Availability
                </Button>
              </Link>
            </div>

            <div className="h-[500px] rounded-lg overflow-hidden shadow-lg border border-border">
              {/* Google Map */}
              <MapView 
                className="w-full h-full"
                initialCenter={{ lat: -37.77, lng: 144.76 }} 
                initialZoom={12}
                onMapReady={(map: google.maps.Map) => {
                  new google.maps.Circle({
                    strokeColor: "#2E5945",
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: "#2E5945",
                    fillOpacity: 0.15,
                    map,
                    center: { lat: -37.77, lng: 144.76 },
                    radius: 6000,
                  });
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}