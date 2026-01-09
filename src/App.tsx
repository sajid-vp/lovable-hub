import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Search from "./pages/Search";
import NewsDetail from "./pages/NewsDetail";
import News from "./pages/News";
import Events from "./pages/Events";
import Birthdays from "./pages/Birthdays";
import Announcements from "./pages/Announcements";
import SocialFeedPage from "./pages/SocialFeed";
import Directory from "./pages/Directory";
import DepartmentPage from "./pages/DepartmentPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search" element={<Search />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/events" element={<Events />} />
            <Route path="/birthdays" element={<Birthdays />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/social" element={<SocialFeedPage />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/departments/:slug" element={<DepartmentPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
