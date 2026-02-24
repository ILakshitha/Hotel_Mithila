import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Rooms', path: '/rooms' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 md:px-6 pt-4 md:pt-6`}
      >
        <div className={`container mx-auto flex items-center justify-between transition-all duration-300 ${scrolled && !isOpen
            ? 'bg-villa-white/80 backdrop-blur-xl shadow-sm rounded-full py-3 px-6 border border-white/20'
            : 'bg-transparent py-4'
          }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group z-50" onClick={() => setIsOpen(false)}>
            <div className="w-9 h-9 bg-villa-ocean rounded-full flex items-center justify-center">
              <span className="text-white font-heading font-semibold text-lg leading-none" style={{ fontFamily: 'Cormorant Garamond, serif' }}>B</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className={`text-lg font-heading font-medium tracking-wider transition-colors duration-300 ${isOpen ? 'text-white' : scrolled ? 'text-villa-deep' : 'text-white'}`}
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                The Breath Villa
              </span>
              <span className={`text-[9px] uppercase tracking-[0.2em] transition-colors duration-300 ${isOpen ? 'text-villa-sand' : scrolled ? 'text-villa-deep/50' : 'text-white/70'}`}>
                Unawatuna · Sri Lanka
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs font-semibold uppercase tracking-widest transition-colors ${scrolled
                    ? location.pathname === item.path ? 'text-villa-ocean' : 'text-villa-deep/70 hover:text-villa-deep'
                    : location.pathname === item.path ? 'text-villa-sand' : 'text-white/80 hover:text-white'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link to="/booking">
              <Button variant="lime" className="py-2 px-6 text-xs h-10 bg-villa-ocean text-white border-villa-ocean hover:bg-villa-ocean/90">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-2 z-50 transition-colors duration-300 ${isOpen ? 'text-villa-sand' : scrolled ? 'text-villa-deep' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-villa-dark z-40 md:hidden flex flex-col items-center justify-center p-6"
          >
            <nav className="flex flex-col gap-8 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-4xl font-heading font-medium text-villa-sand hover:text-white transition-colors"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="h-px bg-white/10 w-24 mx-auto my-4" />
              <Link to="/booking">
                <Button variant="lime" className="w-full bg-villa-ocean text-white border-villa-ocean">Book Your Stay</Button>
              </Link>
            </nav>
            <p className="absolute bottom-8 text-white/30 text-xs tracking-widest">Galle · Unawatuna · Sri Lanka</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;