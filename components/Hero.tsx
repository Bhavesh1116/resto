import React from 'react';
import { ArrowDown, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop"
          alt="Diner Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-oldies-black/80 via-oldies-black/50 to-oldies-black"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-16">
        <div className="mb-4 inline-block border-b-2 border-oldies-red pb-1">
          <span className="text-oldies-red font-bold tracking-widest uppercase text-sm md:text-base">Est. 2023</span>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-oldies-white mb-6 leading-tight drop-shadow-xl">
          Oldies Grill & Lounge
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-10 font-light max-w-2xl mx-auto">
          Casual & Cozy American Dining in the Heart of Bowdle.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#menu" 
            onClick={scrollToMenu}
            className="w-full sm:w-auto px-8 py-4 bg-oldies-red text-white font-bold rounded-sm uppercase tracking-wider hover:bg-red-700 transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
          >
            View Menu <ArrowDown size={18} />
          </a>
          <a 
            href="tel:6052856576" 
            className="w-full sm:w-auto px-8 py-4 bg-white text-oldies-black font-bold rounded-sm uppercase tracking-wider hover:bg-gray-200 transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
          >
            Call to Order <Phone size={18} />
          </a>
        </div>
      </div>
      
      {/* Decorative bottom element */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-oldies-black to-transparent"></div>
    </section>
  );
};

export default Hero;