import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Gates', 'Railings', 'Spiral Stairs', 'Doors'];

const galleryItems = [
  { id: 1, category: 'Gates', src: 'https://images.unsplash.com/photo-1598528827988-2964349d6902?auto=format&fit=crop&q=80&w=800', title: 'Ornamental Driveway Gate' },
  { id: 2, category: 'Railings', src: 'https://images.unsplash.com/photo-1516156008625-3a9d60da923c?auto=format&fit=crop&q=80&w=800', title: 'Interior Balcony Railing' },
  { id: 3, category: 'Spiral Stairs', src: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=800', title: 'Custom Spiral Staircase' },
  { id: 4, category: 'Doors', src: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800', title: 'Iron Entry Door' },
  { id: 5, category: 'Gates', src: 'https://picsum.photos/600/800', title: 'Garden Entry Gate' },
  { id: 6, category: 'Railings', src: 'https://picsum.photos/600/600', title: 'Modern Deck Railing' },
  { id: 7, category: 'Spiral Stairs', src: 'https://picsum.photos/600/900', title: 'Exterior Spiral Staircase' },
  { id: 8, category: 'Railings', src: 'https://picsum.photos/800/600', title: 'Commercial Guard Rail' },
];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-24 bg-[#0a1120]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-2">Selected Works</h2>
            <p className="text-slate-400">Browse our portfolio of custom designs and installations.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-highlight text-primary shadow-lg'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="relative group overflow-hidden rounded-lg cursor-pointer bg-secondary"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-highlight text-xs uppercase tracking-widest font-bold mb-1">{item.category}</p>
                  <h3 className="text-white font-serif text-xl">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;