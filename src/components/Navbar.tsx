
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

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
  }, [window.location.pathname]);

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
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <span className="text-white font-bold text-xl mr-1 font-['Space_Grotesk']">Hack</span>
            <span className="text-hackfinity-blue font-bold text-xl font-['Space_Grotesk']">Finity</span>
          </NavLink>
        
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-hackfinity-blue' : 'text-white/80 hover:text-white'
                } nav-link`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-hackfinity-blue' : 'text-white/80 hover:text-white'
                } nav-link`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/registration" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-hackfinity-blue' : 'text-white/80 hover:text-white'
                } nav-link`
              }
            >
              Registration
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-hackfinity-blue' : 'text-white/80 hover:text-white'
                } nav-link`
              }
            >
              Contact Us
            </NavLink>
            <Button asChild className="bg-hackfinity-blue text-white border-none hover:bg-hackfinity-skyblue">
              <NavLink to="/registration">Register Now</NavLink>
            </Button>
          </nav>
        
          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-hackfinity-darkblue/95 backdrop-blur-md py-4 shadow-lg animate-fade-in overflow-y-auto">
          <nav className="flex flex-col space-y-4 px-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-base font-medium py-3 transition-colors ${
                  isActive ? 'text-hackfinity-blue' : 'text-white/80 hover:text-white'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-base font-medium py-3 transition-colors ${
                  isActive ? 'text-hackfinity-blue' : 'text-white/80 hover:text-white'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/registration" 
              className={({ isActive }) => 
                `text-base font-medium py-3 transition-colors ${
                  isActive ? 'text-hackfinity-blue' : 'text-white/80 hover:text-white'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Registration
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `text-base font-medium py-3 transition-colors ${
                  isActive ? 'text-hackfinity-blue' : 'text-white/80 hover:text-white'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </NavLink>
            <div className="pt-4">
              <Button asChild className="bg-hackfinity-blue text-white w-full border-none hover:bg-hackfinity-skyblue py-6 text-base">
                <NavLink to="/registration" onClick={() => setIsOpen(false)}>Register Now</NavLink>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
