import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  Search, Users, Grid3X3, GitBranch, ChevronDown, ChevronRight,
  Mail, Phone, MapPin, Building2 
} from "lucide-react";
import { PageLayout } from "@/components/layouts/PageLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { employees, departments, getEmployeesByDepartment, getEmployeeById } from "@/data/employeeData";
import type { Employee, Department } from "@/data/employeeData";
import { cn } from "@/lib/utils";

// Employee Card Component
function EmployeeCard({ employee }: { employee: Employee }) {
  const department = departments.find(d => d.name === employee.department);
  
  return (
    <div className="group relative overflow-hidden rounded-xl bg-card/60 backdrop-blur-md border border-border/50 p-4 hover:bg-card/80 hover:shadow-lg transition-all duration-300">
      {/* Top gradient accent */}
      {department && (
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${department.color}`} />
      )}
      
      <div className="flex items-start gap-4">
        <Avatar className="h-14 w-14 border-2 border-background shadow-md">
          <AvatarImage src={employee.avatar} alt={employee.name} />
          <AvatarFallback className="text-sm font-semibold gradient-primary text-primary-foreground">
            {employee.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground truncate">{employee.name}</h3>
          <p className="text-sm text-muted-foreground truncate">{employee.role}</p>
          
          {department && (
            <Link to={`/departments/${department.slug}`}>
              <Badge 
                variant="secondary" 
                className={`mt-2 bg-gradient-to-r ${department.color} text-white border-0 hover:opacity-80 transition-opacity text-xs`}
              >
                {department.name}
              </Badge>
            </Link>
          )}
        </div>
      </div>
      
      {/* Contact info */}
      <div className="mt-4 space-y-1.5 text-sm text-muted-foreground">
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

// Department Group Component
function DepartmentGroup({ department }: { department: Department }) {
  const [isOpen, setIsOpen] = useState(true);
  const departmentEmployees = getEmployeesByDepartment(department.name);
  const DeptIcon = department.icon;
  
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-card/40 hover:bg-card/60 border border-border/50 transition-colors group">
          <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${department.color} flex items-center justify-center`}>
            <DeptIcon className="h-5 w-5 text-white" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-semibold text-foreground">{department.name}</h3>
            <p className="text-sm text-muted-foreground">{departmentEmployees.length} employees</p>
          </div>
          <ChevronDown className={cn(
            "h-5 w-5 text-muted-foreground transition-transform",
            isOpen && "rotate-180"
          )} />
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent className="pt-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-4 border-l-2 border-border/50 ml-5">
          {departmentEmployees.map(employee => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

// Org Chart Node Component
function OrgChartNode({ employee, level = 0 }: { employee: Employee; level?: number }) {
  const [isExpanded, setIsExpanded] = useState(level < 2);
  const department = departments.find(d => d.name === employee.department);
  const directReports = employee.directReports?.map(id => getEmployeeById(id)).filter(Boolean) as Employee[] || [];
  const hasReports = directReports.length > 0;
  
  return (
    <div className="flex flex-col items-center">
      {/* Node */}
      <div 
        className={cn(
          "relative flex items-center gap-3 p-3 rounded-xl bg-card/60 backdrop-blur-md border border-border/50 min-w-[200px] max-w-[280px]",
          hasReports && "cursor-pointer hover:bg-card/80"
        )}
        onClick={() => hasReports && setIsExpanded(!isExpanded)}
      >
        {department && (
          <div className={`absolute top-0 left-0 right-0 h-0.5 rounded-t-xl bg-gradient-to-r ${department.color}`} />
        )}
        
        <Avatar className="h-10 w-10 border-2 border-background">
          <AvatarImage src={employee.avatar} alt={employee.name} />
          <AvatarFallback className="text-xs font-semibold gradient-primary text-primary-foreground">
            {employee.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <p className="font-medium text-sm text-foreground truncate">{employee.name}</p>
          <p className="text-xs text-muted-foreground truncate">{employee.role}</p>
        </div>
        
        {hasReports && (
          <ChevronDown className={cn(
            "h-4 w-4 text-muted-foreground transition-transform shrink-0",
            isExpanded && "rotate-180"
          )} />
        )}
      </div>
      
      {/* Connection line */}
      {hasReports && isExpanded && (
        <>
          <div className="w-px h-6 bg-border/50" />
          
          {/* Reports */}
          <div className="flex gap-6 relative">
            {/* Horizontal connector */}
            {directReports.length > 1 && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px bg-border/50" 
                style={{ width: `calc(100% - 100px)` }} />
            )}
            
            {directReports.map((report, i) => (
              <div key={report.id} className="flex flex-col items-center">
                {directReports.length > 1 && <div className="w-px h-4 bg-border/50" />}
                <OrgChartNode employee={report} level={level + 1} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Directory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  
  // Filter employees based on search and department
  const filteredEmployees = useMemo(() => {
    return employees.filter(employee => {
      const matchesSearch = searchQuery === "" || 
        employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesDepartment = selectedDepartment === "all" || 
        employee.department === selectedDepartment;
      
      return matchesSearch && matchesDepartment;
    });
  }, [searchQuery, selectedDepartment]);
  
  // Get department heads for org chart
  const departmentHeads = useMemo(() => {
    return departments.map(d => getEmployeeById(d.headId)).filter(Boolean) as Employee[];
  }, []);

  return (
    <PageLayout title="Employee Directory">
      <div className="space-y-6">
        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, role, or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card/60 border-border/50"
            />
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            <Button
              variant={selectedDepartment === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedDepartment("all")}
              className="shrink-0"
            >
              All
            </Button>
            {departments.map(dept => (
              <Button
                key={dept.id}
                variant={selectedDepartment === dept.name ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedDepartment(dept.name)}
                className="shrink-0"
              >
                {dept.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Tabs for different views */}
        <Tabs defaultValue="grid" className="space-y-6">
          <TabsList className="bg-card/60 border border-border/50">
            <TabsTrigger value="grid" className="gap-2">
              <Grid3X3 className="h-4 w-4" />
              <span className="hidden sm:inline">Card Grid</span>
            </TabsTrigger>
            <TabsTrigger value="department" className="gap-2">
              <Building2 className="h-4 w-4" />
              <span className="hidden sm:inline">By Department</span>
            </TabsTrigger>
            <TabsTrigger value="orgchart" className="gap-2">
              <GitBranch className="h-4 w-4" />
              <span className="hidden sm:inline">Org Chart</span>
            </TabsTrigger>
          </TabsList>

          {/* Card Grid View */}
          <TabsContent value="grid" className="mt-6">
            {filteredEmployees.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No employees found matching your criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredEmployees.map(employee => (
                  <EmployeeCard key={employee.id} employee={employee} />
                ))}
              </div>
            )}
          </TabsContent>

          {/* Department Grouping View */}
          <TabsContent value="department" className="mt-6">
            <div className="space-y-4">
              {departments
                .filter(d => selectedDepartment === "all" || d.name === selectedDepartment)
                .map(department => (
                  <DepartmentGroup key={department.id} department={department} />
                ))
              }
            </div>
          </TabsContent>

          {/* Org Chart View */}
          <TabsContent value="orgchart" className="mt-6">
            <div className="overflow-x-auto pb-8">
              <div className="flex justify-center gap-8 min-w-max">
                {departmentHeads
                  .filter(e => selectedDepartment === "all" || e.department === selectedDepartment)
                  .map(head => (
                    <OrgChartNode key={head.id} employee={head} />
                  ))
                }
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Department Quick Links */}
        <div className="pt-4 border-t border-border/50">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80 mb-4">
            Browse by Department
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {departments.map(dept => {
              const DeptIcon = dept.icon;
              return (
                <Link
                  key={dept.id}
                  to={`/departments/${dept.slug}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-card/40 hover:bg-card/60 border border-border/50 transition-colors group"
                >
                  <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${dept.color} flex items-center justify-center`}>
                    <DeptIcon className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-foreground truncate">{dept.name}</p>
                    <p className="text-xs text-muted-foreground">{dept.employeeCount} people</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
