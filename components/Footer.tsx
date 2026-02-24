import React from 'react';
import { Instagram, Facebook, MapPin, Mail, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-villa-dark text-villa-cream pt-20 pb-56 md:pb-20">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

        {/* Brand Column */}
        <div className="col-span-1 lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-villa-ocean rounded-full flex items-center justify-center shrink-0">
              <span className="text-white font-heading text-xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>B</span>
            </div>
            <div>
              <h3 className="text-xl font-heading font-medium" style={{ fontFamily: 'Cormorant Garamond, serif' }}>The Breath Villa</h3>
              <p className="text-villa-cream/50 text-[10px] uppercase tracking-widest">Unawatuna · Sri Lanka</p>
            </div>
          </div>
          <p className="text-villa-cream/70 text-sm leading-relaxed mb-6 max-w-sm">
            A private tropical sanctuary on the shores of Unawatuna, Galle. Where the ocean breeze meets luxury and calm.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-villa-ocean transition-colors" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-villa-ocean transition-colors" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="https://wa.me/94771234567" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 transition-colors" aria-label="WhatsApp">
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="font-heading font-medium text-lg mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Explore</h4>
          <ul className="space-y-3 text-sm text-villa-cream/70">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/rooms" className="hover:text-white transition-colors">Rooms & Suites</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            <li><Link to="/booking" className="hover:text-white transition-colors">Book a Stay</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Location Column */}
        <div>
          <h4 className="font-heading font-medium text-lg mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Location</h4>
          <div className="space-y-4 text-sm text-villa-cream/70">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 text-villa-sand shrink-0" />
              <span>The Breath Villa<br />Unawatuna, Galle<br />Sri Lanka 80600</span>
            </div>
            <div className="mt-4 bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-xs text-villa-cream/50 mb-1 uppercase tracking-widest">Walking distance</p>
              <p className="text-white font-medium">5 min to Unawatuna Beach</p>
              <p className="text-villa-cream/60 text-xs mt-1">Galle Fort — 8 min drive</p>
            </div>
          </div>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="font-heading font-medium text-lg mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Get in Touch</h4>
          <ul className="space-y-4 text-sm text-villa-cream/70">
            <li className="flex items-center gap-3">
              <a href="https://wa.me/94771234567" className="flex items-center gap-3 hover:text-green-400 transition-colors">
                <MessageCircle size={18} className="text-green-400 shrink-0" />
                <span>+94 77 123 4567 (WhatsApp)</span>
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-villa-sand shrink-0" />
              <span>+94 91 234 5678</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-villa-sand shrink-0" />
              <span>hello@thebreathvilla.com</span>
            </li>
            <li className="mt-4">
              <Link to="/booking">
                <button className="text-xs font-bold uppercase tracking-widest text-villa-sand border border-villa-sand/30 px-5 py-2.5 rounded-full hover:bg-villa-ocean hover:text-white hover:border-villa-ocean transition-all">
                  Book Now
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto px-4 md:px-8 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-xs text-villa-cream/50">
        <p>© {new Date().getFullYear()} The Breath Villa. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
        <p className="md:ml-auto text-villa-cream/30">Designed with ♥ in Galle, Sri Lanka</p>
      </div>
    </footer>
  );
};

export default Footer;