import React from 'react';

const Gallery: React.FC = () => {
  // Using placeholder images that closely resemble the descriptions provided
  const images = [
    {
      src: "https://images.unsplash.com/photo-1621857426350-ddab8b0305b9?q=80&w=1000&auto=format&fit=crop",
      alt: "Hot Beef Combo",
      label: "Hot Beef Combo"
    },
    {
      src: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1000&auto=format&fit=crop",
      alt: "Double Cheeseburger Basket",
      label: "Oldies Burger Basket"
    },
    {
      src: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000&auto=format&fit=crop",
      alt: "Club Sandwich",
      label: "Club Sandwich"
    },
    {
      src: "https://images.unsplash.com/photo-1496417263034-38ec4f0d6b21?q=80&w=1000&auto=format&fit=crop",
      alt: "Breakfast Plate",
      label: "Sunrise Breakfast"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-oldies-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-white mb-2">Gallery</h2>
          <div className="w-16 h-1 bg-oldies-red mx-auto"></div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4">
          {images.map((img, idx) => (
            <div key={idx} className="break-inside-avoid relative group overflow-hidden rounded-sm">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-bold font-serif text-lg">{img.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;