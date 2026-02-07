import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search, ChevronRight, Users } from "lucide-react";
import { useState } from "react";

interface Employee {
  id: string;
  name: string;
  title: string;
  department: string;
  avatar?: string;
  email: string;
}

const employees: Employee[] = [
  { id: "1", name: "Dr. Sarah Al-Rashid", title: "Dean of Academic Affairs", department: "Administration", email: "s.alrashid@sea.edu", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
  { id: "2", name: "Prof. Ahmed Hassan", title: "Director of Research", department: "Research", email: "a.hassan@sea.edu", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
  { id: "3", name: "Fatima Al-Sayed", title: "HR Manager", department: "Human Resources", email: "f.alsayed@sea.edu", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
  { id: "4", name: "Mohammad Khalil", title: "IT Director", department: "Technology", email: "m.khalil@sea.edu", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" },
  { id: "5", name: "Layla Ibrahim", title: "Student Affairs Coordinator", department: "Students", email: "l.ibrahim@sea.edu", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" },
  { id: "6", name: "Omar Farouk", title: "Finance Manager", department: "Finance", email: "o.farouk@sea.edu", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
];

export function DirectoryWidget() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredEmployees = employees.filter(emp => 
    emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedEmployees = filteredEmployees.slice(0, 4);

  return (
    <Card className="h-full bg-card border border-border shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] relative overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-[hsl(var(--light-blue))]/10">
              <Users className="h-4 w-4 text-[hsl(var(--light-blue))]" />
            </div>
            <CardTitle className="text-base font-semibold">Directory</CardTitle>
          </div>
          <Link 
            to="/directory" 
            className="text-xs text-[hsl(var(--light-blue))] hover:underline flex items-center gap-0.5 font-medium"
          >
            View all <ChevronRight className="h-3 w-3" />
          </Link>
        </div>
        
        {/* Search Bar */}
        <div className="relative mt-3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search employees..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 h-9 text-sm bg-muted/50 border-border/50 focus:border-[hsl(var(--light-blue))]"
          />
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-2">
          {displayedEmployees.map((employee) => (
            <Link
              key={employee.id}
              to={`/directory?id=${employee.id}`}
              className="flex items-center gap-3 p-2.5 rounded-xl 
                         hover:bg-[hsl(var(--light-blue))] hover:shadow-md
                         active:scale-[0.98] transition-all duration-150 group app-touch"
            >
              <Avatar className="h-10 w-10 border-2 border-border group-hover:border-white/30">
                <AvatarImage src={employee.avatar} alt={employee.name} />
                <AvatarFallback className="bg-[hsl(var(--light-blue))]/10 text-[hsl(var(--light-blue))] text-xs font-medium">
                  {employee.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground group-hover:text-white truncate">
                  {employee.name}
                </p>
                <p className="text-xs text-muted-foreground group-hover:text-white/80 truncate">
                  {employee.title}
                </p>
              </div>
              <span className="hidden sm:inline text-[10px] px-2 py-1 rounded-full bg-muted text-muted-foreground 
                               group-hover:bg-white/20 group-hover:text-white font-medium shrink-0">
                {employee.department}
              </span>
            </Link>
          ))}
          
          {displayedEmployees.length === 0 && (
            <div className="text-center py-6 text-muted-foreground text-sm">
              No employees found
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
