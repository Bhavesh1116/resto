import React from 'react';
import { FEATURES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-oldies-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-4xl md:text-5xl text-oldies-white mb-6">
              Modern Small-Town <span className="text-oldies-red italic">Classic</span>
            </h2>
            <div className="w-20 h-1 bg-oldies-red mb-8"></div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Welcome to <span className="text-white font-bold">Oldies Grill & Lounge</span>. While we were established in 2023, our heart beats with a nostalgic rhythm. We are dedicated to bringing the warmth of a classic American diner to Bowdle, serving up hearty comfort food that feels like home.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Whether you're stopping by for a cold beer after work or craving our local favorite—the savory <span className="text-oldies-red font-bold">Hot Beef Combo</span>—we promise a 5-star experience. Come for the food, stay for the cozy atmosphere.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">
              {FEATURES.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-2 bg-oldies-red/10 rounded-full text-oldies-red">
                    <feature.icon size={24} />
                  </div>
                  <span className="text-gray-200 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 md:order-2 relative group">
             <div className="absolute -inset-2 bg-oldies-red rounded-lg opacity-20 group-hover:opacity-40 transition-opacity blur-md"></div>
             <img 
               src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=2070&auto=format&fit=crop" 
               alt="Burger and Fries" 
               className="relative rounded-lg shadow-2xl w-full object-cover h-[400px] md:h-[500px]"
             />
             <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-md shadow-lg">
               <span className="text-oldies-black font-bold font-serif">Rated 5.0 ★</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;