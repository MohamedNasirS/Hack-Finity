
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, isMobile]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-hackfinity-dark/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <span className="text-white font-bold text-lg sm:text-xl mr-1 font-['Space_Grotesk']">Hack</span>
            <span className="text-hackfinity-blue font-bold text-lg sm:text-xl font-['Space_Grotesk']">Finity</span>
          </NavLink>
        
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-hackfinity-blue nav-link-active' : 'text-white/80 hover:text-white'
                } nav-link`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-hackfinity-blue nav-link-active' : 'text-white/80 hover:text-white'
                } nav-link`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/registration" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-hackfinity-blue nav-link-active' : 'text-white/80 hover:text-white'
                } nav-link`
              }
            >
              Registration
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-hackfinity-blue nav-link-active' : 'text-white/80 hover:text-white'
                } nav-link`
              }
            >
              Contact Us
            </NavLink>
            <Button asChild size="sm" className="bg-hackfinity-blue text-white border-none hover:bg-hackfinity-skyblue hidden sm:inline-flex">
              <NavLink to="/registration">Register Now</NavLink>
            </Button>
          </nav>
        
          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-white p-1 relative z-20"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? 
              <X size={24} className="transition-all duration-300 rotate-0 hover:rotate-90" /> : 
              <Menu size={24} className="transition-all duration-300 hover:scale-110" />
            }
          </button>
        </div>
      </div>
    
      {/* Mobile Navigation Menu with improved animation */}
      {isOpen && (
        <div className="md:hidden fixed top-[56px] sm:top-[64px] left-0 w-full h-[calc(100vh-56px)] sm:h-[calc(100vh-64px)] bg-hackfinity-darkblue/95 backdrop-blur-md py-4 shadow-lg mobile-menu-enter overflow-y-auto z-10">
          <nav className="flex flex-col space-y-1 px-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-base font-medium py-3 transition-colors flex items-center justify-between ${
                  isActive ? 'text-hackfinity-blue nav-mobile-link-active' : 'text-white/80 hover:text-white'
                } nav-mobile-link`
              }
              onClick={() => setIsOpen(false)}
            >
              <span>Home</span>
              <ChevronRight size={16} className="text-hackfinity-blue/70" />
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-base font-medium py-3 transition-colors flex items-center justify-between ${
                  isActive ? 'text-hackfinity-blue nav-mobile-link-active' : 'text-white/80 hover:text-white'
                } nav-mobile-link`
              }
              onClick={() => setIsOpen(false)}
            >
              <span>About</span>
              <ChevronRight size={16} className="text-hackfinity-blue/70" />
            </NavLink>
            <NavLink 
              to="/registration" 
              className={({ isActive }) => 
                `text-base font-medium py-3 transition-colors flex items-center justify-between ${
                  isActive ? 'text-hackfinity-blue nav-mobile-link-active' : 'text-white/80 hover:text-white'
                } nav-mobile-link`
              }
              onClick={() => setIsOpen(false)}
            >
              <span>Registration</span>
              <ChevronRight size={16} className="text-hackfinity-blue/70" />
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `text-base font-medium py-3 transition-colors flex items-center justify-between ${
                  isActive ? 'text-hackfinity-blue nav-mobile-link-active' : 'text-white/80 hover:text-white'
                } nav-mobile-link`
              }
              onClick={() => setIsOpen(false)}
            >
              <span>Contact Us</span>
              <ChevronRight size={16} className="text-hackfinity-blue/70" />
            </NavLink>
            <div className="pt-4">
              <Button asChild className="bg-hackfinity-blue text-white w-full border-none hover:bg-hackfinity-skyblue py-5 text-base">
                <NavLink to="/registration" onClick={() => setIsOpen(false)}>Register Now</NavLink>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
