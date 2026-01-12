import { LucideIcon, Users, BookOpen, FlaskConical, Megaphone, Shield, Code, Heart, GraduationCap } from "lucide-react";

export interface Employee {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  phone?: string;
  location?: string;
  avatar?: string;
  bio?: string;
  joinDate: string;
  reportsTo?: string;
  directReports?: string[];
}

export interface Department {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  color: string;
  headId: string;
  employeeCount: number;
}

export interface SpotlightEmployee {
  id: string;
  employee: Employee;
  achievement: string;
  quote: string;
  spotlightDate: string;
}

// Departments
export const departments: Department[] = [
  {
    id: "d1",
    name: "Early Childhood",
    slug: "early-childhood",
    description: "Developing innovative early childhood education programs and supporting nurseries across Sharjah.",
    icon: Heart,
    color: "from-[hsl(var(--coral))] to-[hsl(var(--orange))]",
    headId: "e1",
    employeeCount: 24,
  },
  {
    id: "d2",
    name: "Research",
    slug: "research",
    description: "Conducting cutting-edge educational research and collaborating with global institutions.",
    icon: FlaskConical,
    color: "from-[hsl(var(--teal))] to-[hsl(var(--turquoise))]",
    headId: "e3",
    employeeCount: 18,
  },
  {
    id: "d3",
    name: "Programs",
    slug: "programs",
    description: "Designing and implementing professional development programs for educators.",
    icon: BookOpen,
    color: "from-primary to-[hsl(var(--light-blue))]",
    headId: "e5",
    employeeCount: 22,
  },
  {
    id: "d4",
    name: "Communications",
    slug: "communications",
    description: "Managing public relations, media, and internal communications for SEA.",
    icon: Megaphone,
    color: "from-[hsl(var(--lavender))] to-[hsl(var(--indigo))]",
    headId: "e7",
    employeeCount: 12,
  },
  {
    id: "d5",
    name: "Administration",
    slug: "administration",
    description: "Overseeing operations, HR, finance, and administrative services.",
    icon: Shield,
    color: "from-[hsl(var(--gold))] to-[hsl(var(--orange))]",
    headId: "e9",
    employeeCount: 16,
  },
  {
    id: "d6",
    name: "IT",
    slug: "it",
    description: "Providing technology solutions, infrastructure, and digital transformation initiatives.",
    icon: Code,
    color: "from-[hsl(var(--turquoise))] to-[hsl(var(--green))]",
    headId: "e11",
    employeeCount: 14,
  },
  {
    id: "d7",
    name: "Quality Assurance",
    slug: "quality-assurance",
    description: "Ensuring educational quality standards and accreditation compliance.",
    icon: GraduationCap,
    color: "from-[hsl(var(--indigo))] to-[hsl(var(--lavender))]",
    headId: "e13",
    employeeCount: 10,
  },
];

// Employees
export const employees: Employee[] = [
  // Early Childhood Department
  {
    id: "e1",
    name: "Sarah Al Maktoum",
    email: "sarah.maktoum@sea.ae",
    role: "Director of Early Childhood",
    department: "Early Childhood",
    phone: "+971 6 123 4567",
    location: "Building A, Floor 3",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    bio: "Passionate about transforming early childhood education with over 15 years of experience.",
    joinDate: "2019-03-15",
    directReports: ["e2"],
  },
  {
    id: "e2",
    name: "Mariam Al Shamsi",
    email: "mariam.shamsi@sea.ae",
    role: "Senior Program Coordinator",
    department: "Early Childhood",
    phone: "+971 6 123 4568",
    location: "Building A, Floor 3",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    bio: "Specializing in curriculum development and teacher training.",
    joinDate: "2020-06-01",
    reportsTo: "e1",
  },
  
  // Research Department
  {
    id: "e3",
    name: "Ahmed Hassan",
    email: "ahmed.hassan@sea.ae",
    role: "Head of Research",
    department: "Research",
    phone: "+971 6 123 4569",
    location: "Building B, Floor 2",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    bio: "PhD in Educational Psychology with focus on learning analytics.",
    joinDate: "2018-09-01",
    directReports: ["e4"],
  },
  {
    id: "e4",
    name: "Noura Al Ketbi",
    email: "noura.ketbi@sea.ae",
    role: "Research Analyst",
    department: "Research",
    phone: "+971 6 123 4570",
    location: "Building B, Floor 2",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
    bio: "Data-driven researcher passionate about evidence-based education.",
    joinDate: "2021-02-15",
    reportsTo: "e3",
  },

  // Programs Department
  {
    id: "e5",
    name: "Fatima Al Qasimi",
    email: "fatima.qasimi@sea.ae",
    role: "Director of Programs",
    department: "Programs",
    phone: "+971 6 123 4571",
    location: "Building A, Floor 2",
    bio: "Leading innovative professional development initiatives for educators.",
    joinDate: "2019-01-10",
    directReports: ["e6"],
  },
  {
    id: "e6",
    name: "Khalid Al Zaabi",
    email: "khalid.zaabi@sea.ae",
    role: "Program Manager",
    department: "Programs",
    phone: "+971 6 123 4572",
    location: "Building A, Floor 2",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    bio: "Expert in designing impactful learning experiences.",
    joinDate: "2020-03-20",
    reportsTo: "e5",
  },

  // Communications Department
  {
    id: "e7",
    name: "Layla Ahmed",
    email: "layla.ahmed@sea.ae",
    role: "Communications Director",
    department: "Communications",
    phone: "+971 6 123 4573",
    location: "Building A, Floor 1",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    bio: "Strategic communications leader with expertise in digital media.",
    joinDate: "2019-05-01",
    directReports: ["e8"],
  },
  {
    id: "e8",
    name: "Hamad Al Nuaimi",
    email: "hamad.nuaimi@sea.ae",
    role: "Content Specialist",
    department: "Communications",
    phone: "+971 6 123 4574",
    location: "Building A, Floor 1",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    bio: "Creative storyteller bringing SEA's mission to life.",
    joinDate: "2021-08-15",
    reportsTo: "e7",
  },

  // Administration Department
  {
    id: "e9",
    name: "Omar Al Farsi",
    email: "omar.farsi@sea.ae",
    role: "Director of Administration",
    department: "Administration",
    phone: "+971 6 123 4575",
    location: "Building C, Floor 1",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    bio: "Ensuring smooth operations across all SEA facilities.",
    joinDate: "2018-06-01",
    directReports: ["e10"],
  },
  {
    id: "e10",
    name: "Aisha Al Suwaidi",
    email: "aisha.suwaidi@sea.ae",
    role: "HR Manager",
    department: "Administration",
    phone: "+971 6 123 4576",
    location: "Building C, Floor 1",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    bio: "Building a thriving workplace culture at SEA.",
    joinDate: "2019-11-01",
    reportsTo: "e9",
  },

  // IT Department
  {
    id: "e11",
    name: "Mohammed Rashid",
    email: "mohammed.rashid@sea.ae",
    role: "IT Director",
    department: "IT",
    phone: "+971 6 123 4577",
    location: "Building B, Floor 1",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    bio: "Driving digital transformation and innovation at SEA.",
    joinDate: "2018-04-15",
    directReports: ["e12"],
  },
  {
    id: "e12",
    name: "Yusuf Al Marzouqi",
    email: "yusuf.marzouqi@sea.ae",
    role: "Senior Developer",
    department: "IT",
    phone: "+971 6 123 4578",
    location: "Building B, Floor 1",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
    bio: "Full-stack developer passionate about EdTech solutions.",
    joinDate: "2020-09-01",
    reportsTo: "e11",
  },

  // Quality Assurance Department
  {
    id: "e13",
    name: "Reem Al Hashimi",
    email: "reem.hashimi@sea.ae",
    role: "Head of Quality Assurance",
    department: "Quality Assurance",
    phone: "+971 6 123 4579",
    location: "Building A, Floor 4",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    bio: "Committed to maintaining the highest educational standards.",
    joinDate: "2019-08-01",
    directReports: ["e14"],
  },
  {
    id: "e14",
    name: "Sultan Al Dhaheri",
    email: "sultan.dhaheri@sea.ae",
    role: "Quality Analyst",
    department: "Quality Assurance",
    phone: "+971 6 123 4580",
    location: "Building A, Floor 4",
    avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face",
    bio: "Detail-oriented professional ensuring compliance and excellence.",
    joinDate: "2021-04-15",
    reportsTo: "e13",
  },
];

// Current spotlight employees (multiple)
export const spotlightEmployees: SpotlightEmployee[] = [
  {
    id: "s1",
    employee: employees.find(e => e.id === "e3")!,
    achievement: "Led the successful WERA membership application and established 3 new international research partnerships this quarter.",
    quote: "Education research is not just about gathering data—it's about transforming lives through evidence-based practices.",
    spotlightDate: "2025-01-01",
  },
  {
    id: "s2",
    employee: employees.find(e => e.id === "e1")!,
    achievement: "Launched the new Early Childhood Excellence Framework adopted by 15 nurseries across Sharjah.",
    quote: "Every child deserves a foundation built on curiosity, creativity, and compassion.",
    spotlightDate: "2025-01-01",
  },
  {
    id: "s3",
    employee: employees.find(e => e.id === "e7")!,
    achievement: "Orchestrated SEA's rebrand campaign reaching 2M+ audience and increased engagement by 180%.",
    quote: "Great communication transforms complex ideas into shared understanding.",
    spotlightDate: "2025-01-01",
  },
];

// Legacy export for backward compatibility
export const currentSpotlight: SpotlightEmployee = spotlightEmployees[0];

// Helper functions
export const getEmployeesByDepartment = (departmentName: string): Employee[] => {
  return employees.filter(e => e.department === departmentName);
};

export const getDepartmentBySlug = (slug: string): Department | undefined => {
  return departments.find(d => d.slug === slug);
};

export const getEmployeeById = (id: string): Employee | undefined => {
  return employees.find(e => e.id === id);
};

export const getDepartmentHead = (departmentName: string): Employee | undefined => {
  const dept = departments.find(d => d.name === departmentName);
  if (!dept) return undefined;
  return employees.find(e => e.id === dept.headId);
};
