import { Target, Eye, Award } from "lucide-react";

export function PublicAbout() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About Sharjah Education Academy
          </h2>
          <p className="text-lg text-muted-foreground">
            Sharjah Education Academy (SEA) is a leading institution committed to the 
            professional development of educators and educational leaders in the Emirate of Sharjah. 
            We provide world-class training programs, research initiatives, and resources to 
            enhance the quality of education across all levels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-card rounded-2xl p-8 border shadow-sm text-center">
            <div className="h-16 w-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To empower educators with the knowledge, skills, and tools they need to 
              deliver exceptional learning experiences and drive educational innovation.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-card rounded-2xl p-8 border shadow-sm text-center">
            <div className="h-16 w-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
              <Eye className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To be a global center of excellence in educational development, 
              shaping the future of education in Sharjah and beyond.
            </p>
          </div>

          {/* Values */}
          <div className="bg-card rounded-2xl p-8 border shadow-sm text-center">
            <div className="h-16 w-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
              <Award className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            <p className="text-muted-foreground">
              Excellence, Innovation, Collaboration, Integrity, and a commitment to 
              lifelong learning guide everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
