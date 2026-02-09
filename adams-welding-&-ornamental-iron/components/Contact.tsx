import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a1120] relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <div>
            <span className="text-highlight uppercase tracking-[0.2em] font-bold text-sm mb-4 block">Get In Touch</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-8">Start Your Project</h2>
            <p className="text-slate-400 text-lg mb-12">
              Ready to enhance your property with custom iron work? Contact us today for your no-obligation free estimate.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-white/5 p-4 rounded-lg text-highlight">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Call Us</h3>
                  <p className="text-slate-400 mb-2">St. George, UT: <a href="tel:4357732602" className="text-white hover:text-highlight transition-colors">435-773-2602</a></p>
                  <p className="text-slate-400">Denver, CO: <a href="tel:7208916496" className="text-white hover:text-highlight transition-colors">720-891-6496</a></p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-white/5 p-4 rounded-lg text-highlight">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Hours</h3>
                  <p className="text-slate-400">Mon - Fri: 8:00am - 6:00pm</p>
                  <p className="text-slate-400">Weekend: By Appointment</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-white/5 p-4 rounded-lg text-highlight">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Email</h3>
                  <p className="text-slate-400">info@adamswelding.com</p>
                  <p className="text-xs text-slate-500 mt-1">(Placeholder email for demo)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-secondary/20 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
            <h3 className="font-serif text-2xl text-white mb-6">Request Free Estimate</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm uppercase tracking-wider text-slate-400 font-bold">Name</label>
                  <input type="text" id="name" className="w-full bg-primary/50 border border-white/10 rounded p-3 text-white focus:border-highlight focus:outline-none focus:ring-1 focus:ring-highlight transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm uppercase tracking-wider text-slate-400 font-bold">Phone</label>
                  <input type="tel" id="phone" className="w-full bg-primary/50 border border-white/10 rounded p-3 text-white focus:border-highlight focus:outline-none focus:ring-1 focus:ring-highlight transition-all" placeholder="(555) 123-4567" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm uppercase tracking-wider text-slate-400 font-bold">Email</label>
                <input type="email" id="email" className="w-full bg-primary/50 border border-white/10 rounded p-3 text-white focus:border-highlight focus:outline-none focus:ring-1 focus:ring-highlight transition-all" placeholder="john@example.com" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm uppercase tracking-wider text-slate-400 font-bold">Service Interested In</label>
                <select id="service" className="w-full bg-primary/50 border border-white/10 rounded p-3 text-slate-300 focus:border-highlight focus:outline-none focus:ring-1 focus:ring-highlight transition-all">
                  <option>Ornamental Iron</option>
                  <option>Gates & Fences</option>
                  <option>Railings</option>
                  <option>Furniture & Decor</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm uppercase tracking-wider text-slate-400 font-bold">Message</label>
                <textarea id="message" rows={4} className="w-full bg-primary/50 border border-white/10 rounded p-3 text-white focus:border-highlight focus:outline-none focus:ring-1 focus:ring-highlight transition-all" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="submit" className="w-full bg-highlight text-primary font-bold uppercase tracking-widest py-4 rounded hover:bg-yellow-500 transition-colors shadow-lg shadow-yellow-500/10">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;