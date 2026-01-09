import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PublicHero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--secondary)/0.15),transparent_50%)]" />

      <div className="container relative z-10 px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border bg-card/50 backdrop-blur px-4 py-1.5 mb-8 animate-fade-in">
            <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm font-medium">Your digital workplace hub</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
            Everything you need,{" "}
            <span className="text-gradient">one place</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Connect with colleagues, access resources, and stay informed with our 
            comprehensive intranet portal designed for modern teams.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <Button size="lg" className="gradient-primary text-primary-foreground min-w-[160px]" asChild>
              <Link to="/login">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="min-w-[160px]">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Hero image/preview */}
        <div className="mt-16 mx-auto max-w-5xl animate-fade-in" style={{ animationDelay: "400ms" }}>
          <div className="relative rounded-xl border bg-card shadow-2xl overflow-hidden">
            <div className="absolute inset-0 gradient-primary opacity-5" />
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1200&h=600&fit=crop"
              alt="Dashboard preview"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
