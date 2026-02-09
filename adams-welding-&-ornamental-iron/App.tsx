import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-slate-100 bg-primary min-h-screen selection:bg-highlight selection:text-primary">
      <Header />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-highlight text-primary shadow-lg transition-all duration-300 z-50 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-highlight ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default App;