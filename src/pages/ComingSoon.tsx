import { ArrowLeft, Construction } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const pageDetails: Record<string, { title: string; description: string }> = {
  "/academics": {
    title: "Academics",
    description: "Academic programs, courses, and curriculum information will be available here soon.",
  },
  "/research": {
    title: "Research",
    description: "Research initiatives, publications, and collaboration opportunities coming soon.",
  },
  "/nurseries": {
    title: "Nurseries",
    description: "Early childhood education and nursery program details will be available soon.",
  },
  "/help": {
    title: "Help Desk",
    description: "IT support, FAQs, and help resources will be available here soon.",
  },
};

export default function ComingSoon() {
  const location = useLocation();
  const details = pageDetails[location.pathname] || {
    title: "Coming Soon",
    description: "This page is under construction.",
  };

  return (
    <div className="min-h-screen min-h-[100dvh] bg-gradient-to-br from-background via-background to-[hsl(var(--turquoise))]/5 no-overscroll">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[hsl(var(--turquoise))]/8 to-[hsl(var(--teal))]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-gradient-to-br from-[hsl(var(--lavender))]/8 to-[hsl(var(--indigo))]/5 rounded-full blur-3xl" />
      </div>
      
      <main className="container max-w-6xl pt-safe pb-safe py-3 sm:py-6 px-3 sm:px-4 relative z-10 scroll-touch">
        {/* Header with back button */}
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <Link 
            to="/" 
            className="p-2 rounded-xl bg-card border border-border shadow-sm 
                       hover:bg-[hsl(var(--light-blue))] hover:border-[hsl(var(--light-blue))]
                       hover:text-white active:scale-95 transition-all app-touch"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">{details.title}</h1>
        </div>
        
        {/* Coming Soon Content */}
        <div className="flex flex-col items-center justify-center py-16 sm:py-24">
          <div className="p-4 rounded-2xl bg-[hsl(var(--light-blue))]/10 mb-6">
            <Construction className="h-12 w-12 sm:h-16 sm:w-16 text-[hsl(var(--light-blue))]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 text-center">
            Coming Soon
          </h2>
          <p className="text-muted-foreground text-center max-w-md px-4">
            {details.description}
          </p>
          <Link
            to="/"
            className="mt-8 px-6 py-2.5 rounded-xl bg-[hsl(var(--light-blue))] text-white font-medium
                       hover:bg-[hsl(var(--light-blue))]/90 active:scale-95 transition-all"
          >
            Back to Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}
