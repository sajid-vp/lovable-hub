import { Link, useParams } from "react-router-dom";
import { 
  Mail, Phone, MapPin, Users, ChevronRight, Crown,
  ArrowUpRight, Calendar
} from "lucide-react";
import { PageLayout } from "@/components/layouts/PageLayout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  getDepartmentBySlug, 
  getEmployeesByDepartment, 
  getEmployeeById,
  departments 
} from "@/data/employeeData";
import type { Employee } from "@/data/employeeData";
import { cn } from "@/lib/utils";

// Employee Card (simplified version for department page)
function DepartmentEmployeeCard({ employee, isHead }: { employee: Employee; isHead?: boolean }) {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-xl bg-card/60 backdrop-blur-md border border-border/50 p-4 hover:bg-card/80 hover:shadow-lg transition-all duration-300",
      isHead && "ring-2 ring-[hsl(var(--gold))]/50"
    )}>
      {isHead && (
        <div className="absolute top-3 right-3">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--orange))] flex items-center justify-center">
            <Crown className="h-3.5 w-3.5 text-white" />
          </div>
        </div>
      )}
      
      <div className="flex items-start gap-4">
        <Avatar className="h-14 w-14 border-2 border-background shadow-md">
          <AvatarImage src={employee.avatar} alt={employee.name} />
          <AvatarFallback className="text-sm font-semibold gradient-primary text-primary-foreground">
            {employee.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-foreground truncate">{employee.name}</h3>
            {isHead && (
              <Badge variant="outline" className="border-[hsl(var(--gold))]/50 text-[hsl(var(--gold))] text-xs">
                Head
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground truncate">{employee.role}</p>
          
          {employee.bio && (
            <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
              {employee.bio}
            </p>
          )}
        </div>
      </div>
      
      {/* Contact info */}
      <div className="mt-4 pt-3 border-t border-border/50 space-y-1.5 text-sm text-muted-foreground">
        <a 
          href={`mailto:${employee.email}`}
          className="flex items-center gap-2 hover:text-primary transition-colors"
        >
          <Mail className="h-3.5 w-3.5" />
          <span className="truncate">{employee.email}</span>
        </a>
        {employee.phone && (
          <a 
            href={`tel:${employee.phone}`}
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>{employee.phone}</span>
          </a>
        )}
        {employee.location && (
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" />
            <span>{employee.location}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function DepartmentPage() {
  const { slug } = useParams<{ slug: string }>();
  const department = slug ? getDepartmentBySlug(slug) : undefined;
  
  if (!department) {
    return (
      <PageLayout title="Department Not Found" backTo="/directory">
        <div className="text-center py-12">
          <Users className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
          <p className="text-muted-foreground">This department doesn't exist.</p>
          <Button asChild className="mt-4">
            <Link to="/directory">Back to Directory</Link>
          </Button>
        </div>
      </PageLayout>
    );
  }

  const DeptIcon = department.icon;
  const employees = getEmployeesByDepartment(department.name);
  const departmentHead = getEmployeeById(department.headId);
  const otherEmployees = employees.filter(e => e.id !== department.headId);

  // Get other departments for quick navigation
  const otherDepartments = departments.filter(d => d.id !== department.id);

  return (
    <PageLayout title={department.name} backTo="/directory">
      <div className="space-y-8">
        {/* Department Header */}
        <div className="relative overflow-hidden rounded-2xl bg-card/60 backdrop-blur-md border border-border/50 p-6">
          {/* Gradient accent */}
          <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${department.color}`} />
          
          <div className="flex flex-col sm:flex-row gap-6">
            <div className={`h-16 w-16 rounded-xl bg-gradient-to-br ${department.color} flex items-center justify-center shrink-0`}>
              <DeptIcon className="h-8 w-8 text-white" />
            </div>
            
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground">{department.name}</h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {department.description}
              </p>
              
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{employees.length} team members</span>
                </div>
                {departmentHead && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Crown className="h-4 w-4 text-[hsl(var(--gold))]" />
                    <span>Led by {departmentHead.name}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Department Head */}
        {departmentHead && (
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80 mb-4 flex items-center gap-3">
              Department Leadership
              <div className={`h-px flex-1 bg-gradient-to-r ${department.color} to-transparent`} />
            </h3>
            <DepartmentEmployeeCard employee={departmentHead} isHead />
          </section>
        )}

        {/* Team Members */}
        {otherEmployees.length > 0 && (
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80 mb-4 flex items-center gap-3">
              Team Members
              <div className={`h-px flex-1 bg-gradient-to-r ${department.color} to-transparent`} />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherEmployees.map(employee => (
                <DepartmentEmployeeCard key={employee.id} employee={employee} />
              ))}
            </div>
          </section>
        )}

        {/* Other Departments */}
        <section className="pt-4 border-t border-border/50">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80 mb-4">
            Other Departments
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {otherDepartments.map(dept => {
              const Icon = dept.icon;
              return (
                <Link
                  key={dept.id}
                  to={`/departments/${dept.slug}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-card/40 hover:bg-card/60 border border-border/50 transition-colors group"
                >
                  <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${dept.color} flex items-center justify-center`}>
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-foreground truncate">{dept.name}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
