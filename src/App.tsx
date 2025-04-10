
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Aurora from "./components/Aurora";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { useScrollRestoration } from "./hooks/use-scroll-restoration";

// Import pages
import Homepage from "./pages/Index";
import AboutPage from "./pages/About";
import RegistrationPage from "./pages/Registration";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Separate component to use router hooks
const AppContent = () => {
  useScrollRestoration();
  
  return (
    <div className="relative min-h-screen font-['Inter']">
      <Aurora 
        colorStops={["#00D8FF", "#7CFF67", "#00D8FF"]} 
        blend={0.5} 
        amplitude={1.0}
        speed={0.5}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
