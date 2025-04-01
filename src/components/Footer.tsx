
import { NavLink } from 'react-router-dom';
import { Github, Twitter, Facebook, Instagram, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-hackfinity-darkblue/80 backdrop-blur-md text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <NavLink to="/" className="flex items-center mb-4">
              <span className="text-white font-bold text-xl mr-1 font-['Space_Grotesk']">Hack</span>
              <span className="text-hackfinity-blue font-bold text-xl font-['Space_Grotesk']">Finity</span>
            </NavLink>
            <p className="text-hackfinity-gray max-w-xs text-sm">
              A 24-hour coding challenge to solve real-world problems with cutting-edge technology.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <NavLink to="/" className="text-hackfinity-gray hover:text-white transition-colors">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="text-hackfinity-gray hover:text-white transition-colors">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/registration" className="text-hackfinity-gray hover:text-white transition-colors">
                    Registration
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="text-hackfinity-gray hover:text-white transition-colors">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-hackfinity-gray">info@hackfinity.dev</li>
                <li className="text-hackfinity-gray">+1 (555) 123-4567</li>
                <li className="text-hackfinity-gray">123 Innovation Way, Tech City, TC 12345</li>
              </ul>
            </div>
            
            <div className="space-y-3 col-span-2 md:col-span-1">
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-hackfinity-gray hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-hackfinity-gray hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-hackfinity-gray hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-hackfinity-gray hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-hackfinity-gray hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-hackfinity-darkblue flex flex-col md:flex-row items-center justify-between">
          <p className="text-hackfinity-gray text-sm">
            &copy; {new Date().getFullYear()} Hack-Finity. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-hackfinity-gray hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-hackfinity-gray hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
