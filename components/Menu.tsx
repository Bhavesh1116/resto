import React from 'react';
import { MENU_DATA } from '../constants';
import { Star } from 'lucide-react';

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-oldies-offwhite relative">
      {/* Checkerboard Pattern Divider Top */}
      <div className="absolute top-0 left-0 w-full h-4 bg-checkerboard opacity-20"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-oldies-red font-bold tracking-widest uppercase text-sm">Eat Good</span>
          <h2 className="font-serif text-4xl md:text-5xl text-oldies-black mt-2 mb-4">Our Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hearty portions and classic recipes. All prices include tax.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {MENU_DATA.map((category) => (
            <div key={category.title} className="bg-white p-6 md:p-8 rounded-sm shadow-md border-t-4 border-oldies-red">
              <h3 className="font-serif text-2xl font-bold text-oldies-black mb-6 border-b border-gray-100 pb-2">
                {category.title}
              </h3>
              <ul className="space-y-6">
                {category.items.map((item) => (
                  <li key={item.name} className="group">
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-bold text-lg text-gray-800 group-hover:text-oldies-red transition-colors flex items-center gap-2">
                        {item.name}
                        {item.popular && (
                          <span title="Local Favorite" className="text-yellow-500">
                            <Star size={14} fill="currentColor" />
                          </span>
                        )}
                      </h4>
                      <div className="flex-grow mx-4 border-b border-dotted border-gray-300 relative top-[-4px]"></div>
                      <span className="font-bold text-oldies-red text-lg">{item.price}</span>
                    </div>
                    {item.description && (
                      <p className="text-gray-500 text-sm mt-1 italic">{item.description}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            *Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.
          </p>
        </div>
      </div>
      
       {/* Checkerboard Pattern Divider Bottom */}
       <div className="absolute bottom-0 left-0 w-full h-4 bg-checkerboard opacity-20"></div>
    </section>
  );
};

export default Menu;