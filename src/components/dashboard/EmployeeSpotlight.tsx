import { Link } from "react-router-dom";
import { Quote, Award, ChevronRight, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { currentSpotlight, departments } from "@/data/employeeData";

interface EmployeeSpotlightProps {
  variant?: "default" | "compact";
}

export function EmployeeSpotlight({ variant = "default" }: EmployeeSpotlightProps) {
  const { employee, achievement, quote } = currentSpotlight;
  const department = departments.find(d => d.name === employee.department);

  if (variant === "compact") {
    return (
      <section className="space-y-3 h-full">
        {/* Section Header */}
        <div className="flex items-center gap-2">
          <h2 className="text-xs font-bold uppercase tracking-widest text-foreground/80">
            Spotlight
          </h2>
          <div className="flex-1 h-[1.5px] bg-gradient-to-r from-[hsl(var(--gold))]/40 to-transparent rounded-full" />
        </div>

        {/* Compact Spotlight Card */}
        <div className="relative overflow-hidden rounded-2xl bg-card/60 backdrop-blur-md border border-border/50 p-4 group hover:bg-card/80 transition-all duration-300 h-[calc(100%-2rem)]">
          {/* Decorative gradient */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[hsl(var(--gold))] via-[hsl(var(--orange))] to-[hsl(var(--coral))]" />
          
          {/* Sparkle decoration */}
          <div className="absolute top-3 right-3 text-[hsl(var(--gold))]/30">
            <Sparkles className="h-5 w-5" />
          </div>

          <div className="flex flex-col h-full">
            {/* Employee Info - Centered */}
            <div className="flex flex-col items-center text-center mb-4">
              <div className="relative mb-3">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--orange))] opacity-50 blur-sm" />
                <Avatar className="relative h-14 w-14 border-2 border-background">
                  <AvatarImage src={employee.avatar} alt={employee.name} />
                  <AvatarFallback className="text-base font-semibold bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--orange))] text-white">
                    {employee.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--orange))] flex items-center justify-center shadow-lg">
                  <Award className="h-3 w-3 text-white" />
                </div>
              </div>
              
              <h3 className="font-semibold text-sm text-foreground">{employee.name}</h3>
              <p className="text-xs text-muted-foreground">{employee.role}</p>
              {department && (
                <Link 
                  to={`/departments/${department.slug}`}
                  className="inline-block mt-1.5"
                >
                  <Badge 
                    variant="secondary" 
                    className={`bg-gradient-to-r ${department.color} text-white border-0 hover:opacity-80 transition-opacity text-xs px-2 py-0.5`}
                  >
                    {department.name}
                  </Badge>
                </Link>
              )}
            </div>

            {/* Achievement - Compact */}
            <div className="flex-1">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                Achievement
              </p>
              <p className="text-xs text-foreground/90 leading-relaxed line-clamp-3">
                {achievement}
              </p>
            </div>

            {/* View Directory Link */}
            <Link
              to="/directory"
              className="flex items-center justify-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors mt-3 pt-3 border-t border-border/50"
            >
              View directory
              <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // Default full-width variant
  return (
    <section className="space-y-3">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">
            Employee Spotlight
          </h2>
          <div className="h-px flex-1 min-w-[60px] bg-gradient-to-r from-[hsl(var(--gold))] via-[hsl(var(--orange))] to-transparent" />
        </div>
        <Link
          to="/directory"
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          View directory
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Spotlight Card */}
      <div className="relative overflow-hidden rounded-2xl bg-card/60 backdrop-blur-md border border-border/50 p-6 group hover:bg-card/80 transition-all duration-300">
        {/* Decorative gradient */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(var(--gold))] via-[hsl(var(--orange))] to-[hsl(var(--coral))]" />
        
        {/* Sparkle decorations */}
        <div className="absolute top-4 right-4 text-[hsl(var(--gold))]/40">
          <Sparkles className="h-8 w-8" />
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Employee Info */}
          <div className="flex items-start gap-4 lg:w-1/3">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--orange))] opacity-50 blur-sm" />
              <Avatar className="relative h-20 w-20 border-2 border-background">
                <AvatarImage src={employee.avatar} alt={employee.name} />
                <AvatarFallback className="text-xl font-semibold bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--orange))] text-white">
                  {employee.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--orange))] flex items-center justify-center shadow-lg">
                <Award className="h-4 w-4 text-white" />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-lg text-foreground">{employee.name}</h3>
              <p className="text-sm text-muted-foreground">{employee.role}</p>
              {department && (
                <Link 
                  to={`/departments/${department.slug}`}
                  className="inline-block mt-2"
                >
                  <Badge 
                    variant="secondary" 
                    className={`bg-gradient-to-r ${department.color} text-white border-0 hover:opacity-80 transition-opacity`}
                  >
                    {department.name}
                  </Badge>
                </Link>
              )}
            </div>
          </div>

          {/* Achievement & Quote */}
          <div className="flex-1 space-y-4">
            {/* Achievement */}
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                This Month's Achievement
              </p>
              <p className="text-foreground/90 leading-relaxed">
                {achievement}
              </p>
            </div>

            {/* Quote */}
            <div className="relative pl-4 border-l-2 border-[hsl(var(--gold))]/50">
              <Quote className="absolute -left-3 -top-1 h-6 w-6 text-[hsl(var(--gold))]/30 rotate-180" />
              <p className="text-sm italic text-muted-foreground">
                "{quote}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
