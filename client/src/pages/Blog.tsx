import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Calendar, User } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

export default function Blog() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Banner */}
      <div className="bg-secondary text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Gardening Tips & Insights</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Expert advice on landscaping, plant care, and outdoor design for Western Melbourne homes.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-none shadow-md flex flex-col overflow-hidden">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      {post.category}
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                      <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                    </div>
                    <h3 className="text-xl font-bold text-secondary leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <div className="text-primary font-bold text-sm flex items-center group">
                      Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container text-center">
          <h2 className="text-3xl font-serif font-bold mb-4 text-secondary">Need Personalized Advice?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Every garden is unique. Contact our team for a consultation tailored to your specific property and goals.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
