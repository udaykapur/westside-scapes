import { Button } from "@/components/ui/button";
import { Link, useRoute } from "wouter";
import { ArrowLeft, Calendar, User, Tag, Share2 } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import NotFound from "./NotFound";
import { Streamdown } from "streamdown";

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  const slug = params?.slug;
  const post = slug ? blogPosts.find(p => p.id === slug) : null;

  if (!match || !post) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-col w-full">
      {/* Hero Image */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container text-center text-white">
            <div className="inline-block bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              {post.category}
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 max-w-4xl mx-auto leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm opacity-90">
              <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
              <span className="flex items-center gap-2"><User size={16} /> {post.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Articles
          </Link>

          <div className="bg-background rounded-lg p-0 md:p-8">
            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-secondary prose-p:text-muted-foreground prose-a:text-primary prose-li:text-muted-foreground">
              {/* Using Streamdown or dangerouslySetInnerHTML since content is trusted static data */}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Share / Tags Footer */}
            <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Tag size={18} />
                <span className="font-medium">Tags:</span>
                <span className="bg-muted px-2 py-1 rounded text-sm text-secondary">{post.category}</span>
                <span className="bg-muted px-2 py-1 rounded text-sm text-secondary">Landscaping</span>
                <span className="bg-muted px-2 py-1 rounded text-sm text-secondary">Melbourne</span>
              </div>
              <Button variant="outline" className="gap-2" onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copied to clipboard!");
              }}>
                <Share2 size={16} /> Share Article
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related CTA */}
      <section className="py-16 bg-secondary text-white text-center">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold mb-4">Inspired by this article?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Let us help you implement these ideas in your own garden.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold">
              Get a Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
