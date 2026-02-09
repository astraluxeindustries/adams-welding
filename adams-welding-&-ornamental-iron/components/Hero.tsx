import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-hero-pattern bg-cover bg-center bg-fixed bg-no-repeat">
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="block text-accent uppercase tracking-[0.4em] text-sm md:text-base mb-6 font-semibold">
              Est. 2009
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              Forging Strength <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400 italic font-light">
                With Beauty
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
              Custom ornamental iron work for St. George, UT and Denver, CO. 
              We blend traditional craftsmanship with modern design to create unique, enduring metalworks.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#contact" 
                className="group relative px-8 py-4 bg-highlight text-primary font-bold tracking-widest uppercase overflow-hidden rounded shadow-lg hover:shadow-highlight/50 transition-all duration-300 w-full sm:w-auto text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Free Estimate <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              </a>
              
              <a 
                href="#gallery" 
                className="px-8 py-4 border border-white/30 text-white font-bold tracking-widest uppercase rounded hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-center"
              >
                View Our Work
              </a>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-between px-8 text-xs text-white/30 uppercase tracking-widest">
          <div className="hidden md:block">Scroll to explore</div>
          <div className="hidden md:block">Adams Welding</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;