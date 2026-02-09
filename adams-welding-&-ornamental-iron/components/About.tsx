import React from 'react';
import { CheckCircle2, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const utahCities = [
    "St. George", "Hurricane", "Ivins", "LaVerkin", "Leeds", "New Harmony", 
    "Pine Valley", "Santa Clara", "Springdale", "Toquerville", "Washington", 
    "Veyo", "Dammeron Valley", "Brookside", "Central", "Silver Reef", 
    "Gunlock", "Kayenta", "Diamond Valley", "Winchester Hills", 
    "Bloomington", "Bloomington Hills"
  ];

  const coloradoCities = [
    "Denver", "Aurora", "Brighton", "Northglenn", "Thornton", "Arvada", 
    "Boulder", "Broomfield", "Louisville", "Westminster", "Golden", 
    "Lakewood", "Morrison", "Wheat Ridge", "Highlands Ranch", 
    "Littleton", "Centennial", "Cherry Hills Village", "Englewood", 
    "Greenwood Village", "Lone Tree", "Castle Rock", "Parker", 
    "Fort Collins", "Colorado Springs"
  ];

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
             <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200" 
                  alt="Welder working on iron" 
                  className="w-full object-cover"
                />
             </div>
             {/* Floating badge */}
             <div className="absolute -bottom-8 -right-8 bg-secondary p-8 rounded shadow-xl border border-white/10 hidden md:block">
               <div className="text-4xl font-serif font-bold text-highlight mb-1">15+</div>
               <div className="text-sm text-slate-300 uppercase tracking-widest">Years Experience</div>
             </div>
          </div>
          
          <div>
            <span className="text-accent uppercase tracking-[0.2em] font-bold text-sm mb-4 block">About Us</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6">Master Craftsmen in Metal</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Adams Welding & Ornamental Iron provides custom ornamental iron work to Saint George, UT and Denver, CO. 
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              We specialize in custom unique gates and entry ways. Our team combines traditional blacksmithing techniques with modern precision to deliver results that are not just structural, but true works of art. Whether you need a secure perimeter fence or a stunning spiral staircase, we have the knowledge and experience to get the job done right.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 className="text-highlight" size={20} />
                <span>Custom Design Service</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 className="text-highlight" size={20} />
                <span>Free Estimates</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 className="text-highlight" size={20} />
                <span>Commercial & Residential</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 className="text-highlight" size={20} />
                <span>Licensed & Insured</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Locations */}
        <div className="bg-secondary/20 rounded-2xl p-8 md:p-12 border border-white/5">
          <h3 className="font-serif text-3xl font-bold text-white mb-10 text-center">Areas We Serve</h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="text-highlight" />
                <h4 className="text-xl font-bold text-white">Utah Service Areas</h4>
              </div>
              <p className="text-slate-400 text-sm leading-7">
                {utahCities.join(', ')}
              </p>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="text-highlight" />
                <h4 className="text-xl font-bold text-white">Colorado Service Areas</h4>
              </div>
              <p className="text-slate-400 text-sm leading-7">
                {coloradoCities.join(', ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;