import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export function PublicHero() {
  return (
    <section className="relative min-h-[600px] flex items-center">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
      
      <div className="container relative z-10 px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <div className="mb-8 flex justify-center">
            <img 
              src={logo} 
              alt="Sharjah Education Academy" 
              className="h-20 md:h-24 w-auto brightness-0 invert"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Empowering Educators,
            <br />
            <span className="opacity-90">Transforming Education</span>
          </h1>
          
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10">
            Sharjah Education Academy is dedicated to developing educational leaders and 
            advancing teaching excellence across the emirate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8">
              <a href="#programs">
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent border-white text-white hover:bg-white/10">
              <a href="#about">
                Learn More
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <GraduationCap className="h-8 w-8 opacity-80" />
              </div>
              <div className="text-3xl md:text-4xl font-bold">5000+</div>
              <div className="text-sm opacity-80">Educators Trained</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <BookOpen className="h-8 w-8 opacity-80" />
              </div>
              <div className="text-3xl md:text-4xl font-bold">50+</div>
              <div className="text-sm opacity-80">Programs Offered</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 opacity-80" />
              </div>
              <div className="text-3xl md:text-4xl font-bold">100+</div>
              <div className="text-sm opacity-80">Partner Schools</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
