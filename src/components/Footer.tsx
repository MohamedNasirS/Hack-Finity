
import { NavLink } from 'react-router-dom';
import { Instagram, MessageSquare, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-hackfinity-darkblue/80 backdrop-blur-md text-white py-10 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          <div className="mb-6 md:mb-0">
            <NavLink to="/" className="flex items-center mb-4">
              <span className="text-white font-bold text-xl mr-1 font-['Space_Grotesk']">Hack</span>
              <span className="text-hackfinity-blue font-bold text-xl font-['Space_Grotesk']">Finity</span>
            </NavLink>
            <p className="text-hackfinity-gray max-w-xs text-sm">
              A 24-hour coding challenge to solve real-world problems with cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Navigation */}
            <div className="space-y-4">
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

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <ul className="space-y-2 text-sm text-hackfinity-gray">
                <li className="flex items-center space-x-2 hover:text-white transition-colors">
                  <Mail size={14} className="shrink-0" />
                  <a href="mailto:researchandinnovation.sse@saveetha.com" className="break-all">
                    researchandinnovation.sse@saveetha.com
                  </a>
                </li>
                <li className="flex items-center space-x-2 hover:text-white transition-colors">
                  <Phone size={14} className="shrink-0" />
                  <a href="tel:+919361860665">+91 93618 60665</a>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin size={14} className="mt-1 shrink-0" />
                  <span className="text-sm">
                    Saveetha Nagar, Kanchipuram - Chennai Rd,<br />
                    Sriperumbadur, Chennai,<br />
                    Tamil Nadu 602105
                  </span>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-hackfinity-gray hover:text-white transition-colors p-2"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://chat.whatsapp.com/FTbCzg7tUeRCkKvy1c1C29"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="text-hackfinity-gray hover:text-white transition-colors p-2"
                >
                  <MessageSquare size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-4 border-t border-hackfinity-darkblue flex flex-col md:flex-row items-center justify-between">
          <p className="text-hackfinity-gray text-xs sm:text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Hack-Finity. All rights reserved.
          </p>
          <div className="flex space-x-4 text-xs sm:text-sm">
            <a href="#" className="text-hackfinity-gray hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-hackfinity-gray hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
