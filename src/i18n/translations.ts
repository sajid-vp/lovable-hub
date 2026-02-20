export type Language = "en" | "ar";

export const translations = {
  en: {
    // Common
    dashboard: "Dashboard",
    search: "Search",
    notifications: "Notifications",
    viewAll: "View All",
    readMore: "Read more",
    backToDashboard: "Back to Dashboard",
    comingSoon: "Coming Soon",
    noResults: "No results found",
    
    // Welcome Banner
    goodMorning: "Good Morning",
    goodAfternoon: "Good Afternoon",
    goodEvening: "Good Evening",
    welcomeBack: "Welcome back",
    today: "Today",
    searchPlaceholder: "Search news, people, events...",
    
    // Navigation
    employees: "Employees",
    students: "Students",
    academics: "Academics",
    nurseries: "Nurseries",
    research: "Research",
    helpDesk: "Help Desk",
    
    // Sidebar
    home: "Home",
    news: "News",
    email: "Email",
    calendar: "Calendar",
    documents: "Documents",
    directory: "Directory",
    reports: "Reports",
    projects: "Projects",
    messages: "Messages",
    helpSupport: "Help & Support",
    settings: "Settings",
    
    // Dashboard sections
    announcements: "Announcements",
    leadershipMessage: "Leadership Message",
    quickLinks: "Quick Links",
    apps: "Applications",
    recentDocuments: "Recent Documents",
    teamsActivity: "Teams Activity",
    upcomingMeetings: "Upcoming Meetings",
    newsFeed: "Latest News",
    upcomingEvents: "Upcoming Events",
    staffDirectory: "Staff Directory",
    
    // Employees page
    employeeServices: "Employee Services",
    connectWithColleagues: "Connect with your colleagues, celebrate achievements, and stay updated",
    viewProfile: "View Profile",
    newPost: "New Post",
    socialFeed: "Social Feed",
    employeeSpotlight: "Employee Spotlight",
    teamBirthdays: "Team Birthdays",
    
    // Services
    leave: "Leave",
    claims: "Claims",
    letters: "Letters",
    timesheet: "Timesheet",
    payslip: "Payslip",
    certificates: "Certificates",
    requestTimeOff: "Request time off",
    submitExpenses: "Submit expenses",
    requestDocuments: "Request documents",
    logHours: "Log hours",
    viewSalary: "View salary",
    trainingRecords: "Training records",
    
    // Auth
    signIn: "Sign In",
    signOut: "Sign Out",
    profile: "Profile",
    myAccount: "My Account",
    
    // Public landing
    aboutUs: "About Us",
    contactUs: "Contact Us",
    programs: "Programs",
    events: "Events",
    getStarted: "Get Started",
    staffLogin: "Staff Login",
    
    // Language
    language: "Language",
    english: "English",
    arabic: "العربية",
  },
  ar: {
    // Common
    dashboard: "لوحة التحكم",
    search: "بحث",
    notifications: "الإشعارات",
    viewAll: "عرض الكل",
    readMore: "اقرأ المزيد",
    backToDashboard: "العودة إلى لوحة التحكم",
    comingSoon: "قريباً",
    noResults: "لم يتم العثور على نتائج",
    
    // Welcome Banner
    goodMorning: "صباح الخير",
    goodAfternoon: "مساء الخير",
    goodEvening: "مساء الخير",
    welcomeBack: "مرحباً بعودتك",
    today: "اليوم",
    searchPlaceholder: "ابحث عن الأخبار، الأشخاص، الأحداث...",
    
    // Navigation
    employees: "الموظفون",
    students: "الطلاب",
    academics: "الأكاديميات",
    nurseries: "الحضانات",
    research: "البحث العلمي",
    helpDesk: "مكتب المساعدة",
    
    // Sidebar
    home: "الرئيسية",
    news: "الأخبار",
    email: "البريد الإلكتروني",
    calendar: "التقويم",
    documents: "المستندات",
    directory: "الدليل",
    reports: "التقارير",
    projects: "المشاريع",
    messages: "الرسائل",
    helpSupport: "المساعدة والدعم",
    settings: "الإعدادات",
    
    // Dashboard sections
    announcements: "الإعلانات",
    leadershipMessage: "رسالة القيادة",
    quickLinks: "روابط سريعة",
    apps: "التطبيقات",
    recentDocuments: "المستندات الأخيرة",
    teamsActivity: "نشاط الفرق",
    upcomingMeetings: "الاجتماعات القادمة",
    newsFeed: "آخر الأخبار",
    upcomingEvents: "الأحداث القادمة",
    staffDirectory: "دليل الموظفين",
    
    // Employees page
    employeeServices: "خدمات الموظفين",
    connectWithColleagues: "تواصل مع زملائك، احتفل بالإنجازات، وابقَ على اطلاع",
    viewProfile: "عرض الملف الشخصي",
    newPost: "منشور جديد",
    socialFeed: "الموجز الاجتماعي",
    employeeSpotlight: "تسليط الضوء على الموظف",
    teamBirthdays: "أعياد ميلاد الفريق",
    
    // Services
    leave: "الإجازات",
    claims: "المطالبات",
    letters: "الخطابات",
    timesheet: "سجل الحضور",
    payslip: "كشف الراتب",
    certificates: "الشهادات",
    requestTimeOff: "طلب إجازة",
    submitExpenses: "تقديم المصروفات",
    requestDocuments: "طلب مستندات",
    logHours: "تسجيل الساعات",
    viewSalary: "عرض الراتب",
    trainingRecords: "سجلات التدريب",
    
    // Auth
    signIn: "تسجيل الدخول",
    signOut: "تسجيل الخروج",
    profile: "الملف الشخصي",
    myAccount: "حسابي",
    
    // Public landing
    aboutUs: "من نحن",
    contactUs: "اتصل بنا",
    programs: "البرامج",
    events: "الفعاليات",
    getStarted: "ابدأ الآن",
    staffLogin: "دخول الموظفين",
    
    // Language
    language: "اللغة",
    english: "English",
    arabic: "العربية",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
