import { GraduationCap, Users, BookOpen, Lightbulb, Award, Globe } from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "Teacher Development",
    description: "Comprehensive training programs to enhance teaching methodologies and classroom management skills.",
  },
  {
    icon: Users,
    title: "Leadership Training",
    description: "Develop educational leaders who can inspire change and drive excellence in their institutions.",
  },
  {
    icon: BookOpen,
    title: "Curriculum Design",
    description: "Learn modern approaches to curriculum development aligned with international standards.",
  },
  {
    icon: Lightbulb,
    title: "Innovation in Education",
    description: "Explore emerging technologies and innovative practices transforming education.",
  },
  {
    icon: Award,
    title: "Professional Certification",
    description: "Earn recognized certifications that validate your expertise and advance your career.",
  },
  {
    icon: Globe,
    title: "International Programs",
    description: "Collaborate with global partners and participate in international educational initiatives.",
  },
];

export function PublicPrograms() {
  return (
    <section id="programs" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Programs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover our comprehensive range of professional development programs 
            designed to elevate educators at every stage of their career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="group relative bg-card rounded-2xl p-6 border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                <program.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{program.title}</h3>
              <p className="text-sm text-muted-foreground">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
