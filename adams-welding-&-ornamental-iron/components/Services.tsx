import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Hammer, Crown, Layers, Grid, Maximize } from 'lucide-react';
import { ServiceItem } from '../types';

const servicesData: ServiceItem[] = [
  {
    title: "Ornamental Iron",
    description: "Exquisite decorative ironwork that adds timeless elegance to any property. Perfect for gardens, patios, and architectural accents.",
    icon: "crown"
  },
  {
    title: "Custom Iron Works",
    description: "If you can dream it, we can forge it. Bespoke designs tailored specifically to your aesthetic and structural requirements.",
    icon: "hammer"
  },
  {
    title: "Gates - Rail - Fence",
    description: "Security meets style. High-durability entry gates, safety railings, and perimeter fencing built to withstand the elements.",
    icon: "shield"
  },
  {
    title: "Décor - Furniture - Trellis",
    description: "Unique interior and exterior pieces including iron furniture, garden trellises, and wall décor.",
    icon: "layers"
  },
  {
    title: "Sneeze Guards",
    description: "Protective barriers for commercial spaces, designed to be functional without sacrificing visual appeal.",
    icon: "grid"
  },
  {
    title: "Window Well Covers",
    description: "Safety covers that allow light in while keeping debris and intruders out. Custom fitted for any window size.",
    icon: "maximize"
  }
];

const getIcon = (name: string) => {
  switch(name) {
    case 'crown': return <Crown size={32} />;
    case 'hammer': return <Hammer size={32} />;
    case 'shield': return <Shield size={32} />;
    case 'layers': return <Layers size={32} />;
    case 'grid': return <Grid size={32} />;
    case 'maximize': return <Maximize size={32} />;
    default: return <Hammer size={32} />;
  }
};

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-primary relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
          <div className="h-1 w-24 bg-highlight mx-auto mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Whatever your iron work needs, we have the knowledge and experience to get the job done. 
            We specialize in custom unique gates and entry ways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-secondary/30 backdrop-blur-sm border border-white/5 p-8 rounded-lg hover:bg-secondary/50 hover:border-highlight/30 transition-all duration-300 group cursor-default"
            >
              <div className="mb-6 p-4 bg-primary rounded-full w-16 h-16 flex items-center justify-center text-highlight group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/20">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-highlight transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <p className="text-xl text-white font-serif italic mb-6">
                "We offer no obligation, free estimates!"
            </p>
            <a href="#contact" className="inline-block border-b-2 border-highlight text-highlight pb-1 hover:text-white hover:border-white transition-all duration-300 uppercase tracking-widest text-sm font-bold">
                Schedule an Appointment
            </a>
        </div>
      </div>
    </section>
  );
};

export default Services;