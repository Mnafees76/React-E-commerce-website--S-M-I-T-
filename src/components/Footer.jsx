import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#F0EEED] text-black pt-28 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-10 border-b border-gray-300/80">
          
          {/* Column 1: Logo & Info */}
          <div className="md:col-span-1 space-y-4">
            <h2 className="text-3xl font-black tracking-tight text-black">
              SHOP.CO
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We have clothes that suits your style and which you’re proud to wear. From women to men.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" className="w-7 h-7 bg-white rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors text-xs">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-xs">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-7 h-7 bg-white rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors text-xs">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-7 h-7 bg-white rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors text-xs">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          {/* Column 2: COMPANY */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest text-black uppercase mb-4">
              COMPANY
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="#" className="hover:text-black transition-colors">About</Link></li>
              <li><Link to="#" className="hover:text-black transition-colors">Features</Link></li>
              <li><Link to="#" className="hover:text-black transition-colors">Works</Link></li>
              <li><Link to="#" className="hover:text-black transition-colors">Career</Link></li>
            </ul>
          </div>

          {/* Column 3: HELP */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest text-black uppercase mb-4">
              HELP
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="#" className="hover:text-black transition-colors">Customer Support</Link></li>
              <li><Link to="#" className="hover:text-black transition-colors">Delivery Details</Link></li>
              <li><Link to="#" className="hover:text-black transition-colors">Terms & Conditions</Link></li>
              <li><Link to="#" className="hover:text-black transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: FAQ */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest text-black uppercase mb-4">
              FAQ
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="#" className="hover:text-black transition-colors">Account</Link></li>
              <li><Link to="#" className="hover:text-black transition-colors">Manage Deliveries</Link></li>
              <li><Link to="#" className="hover:text-black transition-colors">Orders</Link></li>
              <li><Link to="#" className="hover:text-black transition-colors">Payments</Link></li>
            </ul>
          </div>

          {/* Column 5: RESOURCES */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest text-black uppercase mb-4">
              RESOURCES
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="#" className="hover:text-black transition-colors">Free eBooks</Link></li>
              <li><Link to="#" className="hover:text-black transition-colors">Development Tutorial</Link></li>
              <li><Link to="#" className="hover:text-black transition-colors">How to - Blog</Link></li>
              <li><Link to="#" className="hover:text-black transition-colors">Youtube Playlist</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>

          {/* Payment Cards Icons */}
          <div className="flex items-center space-x-2">
            <div className="bg-white px-2.5 py-1 rounded border border-gray-200 font-bold text-blue-600 italic text-[11px]">
              VISA
            </div>
            <div className="bg-white px-2 py-1 rounded border border-gray-200 flex items-center justify-center">
              <span className="w-2.5 h-2.5 bg-red-500 rounded-full inline-block -mr-1"></span>
              <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full inline-block"></span>
            </div>
            <div className="bg-white px-2 py-1 rounded border border-gray-200 font-semibold text-blue-800 text-[10px]">
              PayPal
            </div>
            <div className="bg-white px-2 py-1 rounded border border-gray-200 font-medium text-black text-[10px]">
              Pay
            </div>
            <div className="bg-white px-2 py-1 rounded border border-gray-200 font-bold text-gray-700 text-[10px]">
              G Pay
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;