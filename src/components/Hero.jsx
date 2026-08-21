// src/components/Hero.jsx
export default function Hero() {
  const stats = [
    { id: 'brands', number: '200+', label: 'International Brands' },
    { id: 'products', number: '2,000+', label: 'High-Quality Products' },
    { id: 'customers', number: '30,000+', label: 'Happy Customers' },
  ];

  const brands = [
    { name: 'VERSACE', id: 'versace' },
    { name: 'ZARA', id: 'zara' },
    { name: 'GUCCI', id: 'gucci' },
    { name: 'PRADA', id: 'prada' },
    { name: 'Calvin Klein', id: 'ck' },
  ];

  return (
    <section className="bg-[#F2F0F1] pt-6 sm:pt-10 lg:pt-16 overflow-hidden flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-end justify-between gap-8 lg:gap-12 w-full">
        
        {/* Left Text Content */}
        <div className="w-full lg:flex-1 space-y-5 sm:space-y-6 z-10 text-left pb-8 sm:pb-12 lg:pb-16">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight uppercase">
            FIND CLOTHES <br className="hidden sm:block" />
            THAT MATCH <br className="hidden sm:block" />
            YOUR STYLE
          </h1>
          
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-lg leading-relaxed">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>

          <button 
            type="button" 
            className="w-full sm:w-auto bg-black text-white text-sm font-medium px-10 py-3.5 sm:py-4 rounded-full hover:bg-black/80 transition-all duration-200 cursor-pointer"
          >
            Shop Now
          </button>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-gray-300 sm:border-none">
            {stats.map((stat, index) => (
              <div 
                key={stat.id} 
                className={`flex flex-col ${index === 2 ? 'col-span-2 sm:col-span-1 items-center sm:items-start' : ''}`}
              >
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">{stat.number}</span>
                <span className="text-[10px] sm:text-xs md:text-sm text-gray-500 mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Container */}
        <div className="w-full lg:flex-1 relative flex justify-center items-end self-end">
          {/* Small Star */}
          <span 
            aria-hidden="true"
            className="absolute top-1/4 left-2 sm:left-8 text-black text-2xl sm:text-4xl animate-pulse z-10 select-none"
          >
            ✦
          </span>

          {/* Large Star */}
          <span 
            aria-hidden="true"
            className="absolute top-2 right-2 sm:right-6 text-black text-4xl sm:text-6xl animate-pulse z-10 select-none"
          >
            ✦
          </span>

          {/* Main Hero Image */}
          <img 
            src="/images/hero.jpg" 
            alt="Fashion Models" 
            className="w-full max-w-xs sm:max-w-md lg:max-w-lg object-cover object-top h-auto max-h-125 block align-bottom"
          />
        </div>

      </div>

      {/* Brands Bar */}
      <div className="bg-black py-6 sm:py-8 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-around sm:justify-between gap-4 sm:gap-8">
          {brands.map((brand) => (
            <span 
              key={brand.id} 
              className="text-white text-lg sm:text-2xl font-extrabold tracking-widest uppercase opacity-90 hover:opacity-100 cursor-pointer"
            >
              {brand.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}