import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-white">Adams Welding</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Forging strength with beauty since 2009. We provide custom ornamental iron work for residential and commercial clients in Utah and Colorado.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="bg-white/5 p-2 rounded-full text-slate-400 hover:text-highlight hover:bg-white/10 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/5 p-2 rounded-full text-slate-400 hover:text-highlight hover:bg-white/10 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/5 p-2 rounded-full text-slate-400 hover:text-highlight hover:bg-white/10 transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-400 hover:text-highlight text-sm transition-colors">Home</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-highlight text-sm transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-slate-400 hover:text-highlight text-sm transition-colors">Pictures & Designs</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-highlight text-sm transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-highlight text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-6">Our Expertise</h4>
            <ul className="space-y-3">
              <li className="text-slate-400 text-sm">Ornamental Iron</li>
              <li className="text-slate-400 text-sm">Custom Gates</li>
              <li className="text-slate-400 text-sm">Safety Railings</li>
              <li className="text-slate-400 text-sm">Spiral Staircases</li>
              <li className="text-slate-400 text-sm">Window Well Covers</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-6">Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">St. George, UT</p>
                <a href="tel:4357732602" className="text-slate-300 hover:text-highlight transition-colors">435-773-2602</a>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Denver, CO</p>
                <a href="tel:7208916496" className="text-slate-300 hover:text-highlight transition-colors">720-891-6496</a>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:info@adamswelding.com" className="text-slate-300 hover:text-highlight transition-colors">info@adamswelding.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; 2009-{new Date().getFullYear()} Adams Welding & Ornamental Iron. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;