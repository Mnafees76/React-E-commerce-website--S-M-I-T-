import React from 'react';

const Newsletter = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mb-20">
      <div className="bg-black text-white rounded-[20px] px-6 py-8 md:px-16 md:py-9 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[40px] font-black leading-tight uppercase tracking-tight max-w-xl text-center md:text-left">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>

        {/* Right Form Inputs */}
        <div className="flex flex-col space-y-3.5 w-full md:w-87.5">
          
          {/* Email Input Field */}
          <div className="relative flex items-center">
            <span className="absolute left-4 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-white text-black pl-12 pr-4 py-3 rounded-full text-sm placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-300 transition-all"
            />
          </div>

          {/* Subscribe Button */}
          <button
            type="button"
            className="w-full bg-white text-black font-medium py-3 rounded-full text-sm hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Subscribe to Newsletter
          </button>

        </div>

      </div>
    </div>
  );
};

export default Newsletter;