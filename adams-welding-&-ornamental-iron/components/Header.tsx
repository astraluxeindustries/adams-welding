import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Pictures & Designs', href: '#gallery' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col">
          <a href="#" className="font-serif text-2xl md:text-3xl font-bold tracking-wider text-white">
            ADAMS <span className="text-accent font-light">WELDING</span>
          </a>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-accent/80 hidden sm:block">
            & Ornamental Iron
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-slate-300 hover:text-white relative group transition-colors duration-300"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-highlight transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2 bg-white/10 border border-white/20 text-white rounded hover:bg-highlight hover:text-primary hover:border-highlight transition-all duration-300 uppercase text-xs font-bold tracking-widest"
          >
            <Phone size={14} />
            <span>Free Estimate</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 bg-primary/98 z-40 lg:hidden flex flex-col justify-center items-center space-y-8 transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-serif text-white hover:text-highlight transition-colors"
          >
            {link.name}
          </a>
        ))}
        <div className="flex flex-col items-center gap-4 mt-8 pt-8 border-t border-white/10 w-48">
          <div className="text-center">
             <p className="text-xs text-accent uppercase tracking-widest mb-1">St. George, UT</p>
             <a href="tel:435-773-2602" className="text-lg font-bold">435-773-2602</a>
          </div>
          <div className="text-center">
             <p className="text-xs text-accent uppercase tracking-widest mb-1">Denver, CO</p>
             <a href="tel:720-891-6496" className="text-lg font-bold">720-891-6496</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;