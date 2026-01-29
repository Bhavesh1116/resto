import React from 'react';
import { MapPin, Phone, Clock, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#121212] text-white pt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: Contact Info */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-oldies-red">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-oldies-red mt-1 shrink-0" size={20} />
                <p className="text-gray-300">
                  3032 Main St<br />
                  Bowdle, SD 57428
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-oldies-red shrink-0" size={20} />
                <a href="tel:6052856576" className="text-gray-300 hover:text-white transition-colors">
                  (605) 285-6576
                </a>
              </div>
              
              {/* Social Media Links */}
              <div className="flex gap-4 pt-4">
                 <a 
                  href="https://www.facebook.com/p/Oldies-Grill-Lounge-100094605635544/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1877F2] hover:bg-blue-700 text-white p-2 rounded-full transition-transform hover:scale-110 flex items-center justify-center"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/oldi.es2023/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white p-2 rounded-full transition-transform hover:scale-110 flex items-center justify-center"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Hours */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-oldies-red">Opening Hours</h3>
            <div className="flex items-start gap-3">
              <Clock className="text-oldies-red mt-1 shrink-0" size={20} />
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between min-w-[200px] border-b border-gray-800 pb-1">
                  <span>Lunch</span>
                  <span>Until 2:00 PM</span>
                </div>
                <div className="flex justify-between min-w-[200px] border-b border-gray-800 pb-1">
                  <span>Dinner</span>
                  <span>4:00 PM - Late</span>
                </div>
                <p className="text-sm text-gray-500 pt-2 italic">Open Daily</p>
              </div>
            </div>
          </div>

          {/* Column 3: Map Placeholder */}
          <div className="w-full h-48 md:h-full min-h-[200px] bg-gray-800 rounded-sm overflow-hidden relative group">
             {/* Simulating a Google Map embed */}
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.187847849123!2d-99.65489792348514!3d45.56672397107575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52d3a77a9657683b%3A0x6a2c2705e3243f01!2s3032%20Main%20St%2C%20Bowdle%2C%20SD%2057428!5e0!3m2!1sen!2sus!4v1709400000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
                title="Google Maps Location"
              ></iframe>
          </div>

        </div>
      </div>

      {/* Copyright & Pattern */}
      <div className="bg-checkerboard h-8 opacity-20 w-full"></div>
      <div className="bg-black py-6 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Oldies Grill & Lounge. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;