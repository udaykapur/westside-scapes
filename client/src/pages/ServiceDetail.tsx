import { Button } from "@/components/ui/button";
import { Link, useRoute } from "wouter";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import NotFound from "./NotFound";

// Data for all services
const servicesData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  process: { title: string; desc: string }[];
}> = {
  "landscaping-design": {
    title: "Landscaping Design",
    subtitle: "Transforming Ideas into Beautiful Outdoor Realities",
    description: "Our landscaping design service is the first step to creating your dream garden. We work closely with you to understand your vision, lifestyle, and budget. Whether you want a low-maintenance family garden, a modern entertainer's courtyard, or a lush tropical retreat, we create designs that are both beautiful and practical for the Western Melbourne climate.",
    image: "images/hero-backyard.jpg",
    features: [
      "Custom concept plans tailored to your site",
      "Plant selection suited to local soil conditions",
      "Material selection and color palette advice",
      "Functional layout optimization"
    ],
    process: [
      { title: "Consultation", desc: "We meet on-site to discuss your needs, preferences, and budget." },
      { title: "Concept Design", desc: "We create a preliminary layout showing the proposed structure and features." },
      { title: "Refinement", desc: "We tweak the design based on your feedback to ensure it's perfect." },
      { title: "Final Plan", desc: "You receive a detailed plan ready for construction." }
    ]
  },
  "paving": {
    title: "Paving Services",
    subtitle: "Durable & Stylish Paving for Driveways and Patios",
    description: "Quality paving can dramatically improve the look and functionality of your home. We specialize in all types of paving, from natural stone like bluestone and sandstone to concrete pavers and brick. Our expert installation ensures a level, stable surface that will stand the test of time and heavy traffic.",
    image: "images/service-paving.jpg",
    features: [
      "Driveways, patios, and garden paths",
      "Pool surrounds and coping",
      "Natural stone, concrete, and clay pavers",
      "Professional base preparation for longevity"
    ],
    process: [
      { title: "Excavation", desc: "Removing old material and leveling the ground to the correct depth." },
      { title: "Base Preparation", desc: "Installing and compacting crushed rock to create a solid foundation." },
      { title: "Laying", desc: "Precision laying of pavers in your chosen pattern." },
      { title: "Finishing", desc: "Grouting or sanding joints and sealing if required." }
    ]
  },
  "turf": {
    title: "Natural & Artificial Turf",
    subtitle: "Lush Green Lawns for Every Lifestyle",
    description: "Nothing beats the look of a fresh green lawn. We supply and install premium instant turf varieties that thrive in Melbourne's west, such as Sir Walter Buffalo and TifTuf Bermuda. For those seeking a zero-maintenance option, we install high-quality, realistic artificial grass that looks great all year round without watering or mowing.",
    image: "images/service-turf.jpg",
    features: [
      "Premium instant turf (Buffalo, Couch, Kikuyu)",
      "High-quality, realistic synthetic grass",
      "Soil improvement and leveling",
      "Irrigation system installation"
    ],
    process: [
      { title: "Site Prep", desc: "Removing weeds/old grass and rototilling the soil." },
      { title: "Soil Improvement", desc: "Adding quality topsoil and fertilizers to promote root growth." },
      { title: "Installation", desc: "Rolling out turf or laying synthetic grass with precision cuts." },
      { title: "Aftercare", desc: "Watering in and providing care instructions for your new lawn." }
    ]
  },
  "screening": {
    title: "Screening & Fencing",
    subtitle: "Privacy & Style for Your Boundary",
    description: "Privacy is essential for enjoying your outdoor space. We design and install a range of screening and fencing solutions that not only provide seclusion but also add a stylish architectural element to your garden. From warm timber slat screens to modern Colorbond fencing, we have options to suit every home style.",
    image: "images/service-screening.jpg",
    features: [
      "Timber slat screening (Merbau, Spotted Gum)",
      "Colorbond fencing and gates",
      "Decorative laser-cut screens",
      "Feature boundary fences"
    ],
    process: [
      { title: "Design", desc: "Selecting the right height and material for your privacy needs." },
      { title: "Post Installation", desc: "Concreting posts deep into the ground for stability." },
      { title: "Framing", desc: "Building a straight and sturdy frame." },
      { title: "Cladding", desc: "Attaching the screening material with uniform spacing." }
    ]
  },
  "garden-beds": {
    title: "Garden Beds & Planting",
    subtitle: "Vibrant, Healthy Gardens That Thrive",
    description: "Garden beds bring life, color, and texture to your landscape. We create raised or ground-level garden beds using timber, steel, or stone edging. Our planting expertise ensures you get the right plants for the right spot, focusing on hardy, drought-tolerant species that flourish in Western Melbourne soils.",
    image: "images/service-garden-beds.jpg",
    features: [
      "Timber, steel, and brick garden edging",
      "Soil importation and improvement",
      "Native and exotic plant selection",
      "Mulching for water retention"
    ],
    process: [
      { title: "Edging", desc: "Installing durable edging to define the garden shape." },
      { title: "Soil Prep", desc: "Filling beds with premium organic garden mix." },
      { title: "Planting", desc: "Placing plants at correct densities for future growth." },
      { title: "Mulching", desc: "Applying a thick layer of mulch to suppress weeds and save water." }
    ]
  },
  "retaining-walls": {
    title: "Retaining Walls",
    subtitle: "Structural Solutions for Sloped Blocks",
    description: "Retaining walls are vital for maximizing usable space on sloping blocks. We build structural and decorative retaining walls that are engineered to last. Whether you need a heavy-duty concrete sleeper wall or a decorative timber sleeper wall for a garden bed, we ensure proper drainage and construction techniques.",
    image: "images/service-retaining-walls.jpg",
    features: [
      "Concrete sleeper walls (various patterns)",
      "Treated pine timber sleeper walls",
      "Blockwork and rendered walls",
      "Proper drainage and backfill"
    ],
    process: [
      { title: "Excavation", desc: "Cutting into the slope to create a level bench." },
      { title: "Footings", desc: "Drilling post holes or pouring concrete footings." },
      { title: "Construction", desc: "Installing posts and sleepers/blocks level and plumb." },
      { title: "Drainage", desc: "Installing ag-pipe and gravel backfill to prevent water pressure buildup." }
    ]
  }
};

export default function ServiceDetail() {
  const [match, params] = useRoute("/services/:slug");
  const slug = params?.slug;
  const service = slug ? servicesData[slug] : null;

  if (!match || !service) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-col w-full">
      {/* Hero Banner */}
      <div className="relative h-[400px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{service.title}</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">{service.subtitle}</p>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Link href="/services" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors">
                <ArrowLeft size={16} className="mr-2" /> Back to Services
              </Link>
              
              <h2 className="text-3xl font-serif font-bold mb-6 text-secondary">Service Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {service.description}
              </p>

              <h3 className="text-2xl font-bold mb-6 text-secondary">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-6 text-secondary">Our Process</h3>
              <div className="space-y-6">
                {service.process.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{step.title}</h4>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-secondary text-white p-8 rounded-lg sticky top-24">
                <h3 className="text-2xl font-serif font-bold mb-4">Get a Quote</h3>
                <p className="mb-6 opacity-90">
                  Ready to start your {service.title.toLowerCase()} project? Contact us today for a free on-site consultation.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg">
                    Contact Us Now
                  </Button>
                </Link>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="font-bold mb-2">Service Areas:</p>
                  <p className="text-sm opacity-80">
                    Deer Park, Caroline Springs, Burnside, Ravenhall, Derrimut, and surrounding Western Suburbs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}