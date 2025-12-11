import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] w-full flex items-center justify-center bg-muted/30">
      <Card className="w-full max-w-md mx-4 border-none shadow-lg">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-destructive" />
            <h1 className="text-3xl font-bold text-secondary">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-muted-foreground">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          
          <div className="mt-8">
            <Link href="/">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold">
                Return to Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
