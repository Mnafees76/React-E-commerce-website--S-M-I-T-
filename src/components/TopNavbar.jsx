// src/components/TopNavbar.jsx
import { useState } from 'react';

export default function TopNavbar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-black text-white text-center py-2 px-8 sm:px-10 text-[11px] sm:text-xs font-light relative flex items-center justify-center min-h-9">
      
      {/* Center Text Container */}
      <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 leading-tight">
        <span className="opacity-90">Sign up and get 20% off to your first order.</span>
        <a 
          href="#" 
          className="underline font-medium hover:opacity-80 transition-opacity whitespace-nowrap"
        >
          Sign Up Now
        </a>
      </div>

      {/* Close Button */}
      <button 
        type="button"
        onClick={() => setIsVisible(false)}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white opacity-70 hover:opacity-100 p-1 cursor-pointer transition-opacity text-sm leading-none"
        aria-label="Close Announcement"
      >
        ✕
      </button>

    </div>
  );
}