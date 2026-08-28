import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const CategoryPage = () => {
  // Demo Products Data
  const [products] = useState([
    {
      id: 1,
      name: 'Gradient Graphic T-shirt',
      rating: 3.5,
      price: 145,
      image: './images/image-8.png',
    },
    {
      id: 2,
      name: 'Polo with Tipping Details',
      rating: 4.5,
      price: 180,
      image: './images/image 9 (1).png'
    },
    {
      id: 3,
      name: 'Black Striped T-shirt',
      rating: 5.0,
      price: 120,
      originalPrice: 150,
      discount: '-20%',
      image: './images/Frame 38 (2).png'
    },
    {
      id: 4,
      name: 'Skinny Fit Jeans',
      rating: 3.5,
      price: 240,
      originalPrice: 260,
      discount: '-20%',
      image:  './images/pant .png'
    },
    {
      id: 5,
      name: 'Checkered Shirt',
      rating: 4.5,
      price: 180,
      image:  './images/image 9.png'
    },
    {
      id: 6,
      name: 'Sleeve Striped T-shirt',
      rating: 4.5,
      price: 130,
      originalPrice: 160,
      discount: '-20%',
      image:  './images/Frame 38.png'
    },
    {
      id: 7,
      name: 'Vertical Striped Shirt',
      rating: 5.0,
      price: 212,
      originalPrice: 232,
      discount: '-20%',
      image:  './images/Frame .png'
    },
    {
      id: 8,
      name: 'Courage Graphic T-shirt',
      rating: 4.0,
      price: 145,
      image: './images/shart.png'
    },
    {
      id: 9,
      name: 'Loose Fit Bermuda Shorts',
      rating: 3.0,
      price: 80,
      image:  './images/Frame 34.png'
    }
  ]);

  // Filter States
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [selectedSize, setSelectedSize] = useState('Large');
  const [priceRange, setPriceRange] = useState(200);

  // Rating Stars Renderer
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < Math.floor(rating) ? 'text-[#FFC633] fill-current' : 'text-gray-200 fill-current'}`}
        viewBox="0 0 24 24"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ));
  };

  return (
    <div className="bg-white min-h-screen font-sans flex flex-col justify-between">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full grow">
        
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 text-sm text-gray-500 flex items-center space-x-2">
          <Link to="/" className="hover:text-black">Home</Link>
          <span>&gt;</span>
          <span className="text-black font-medium">Casual</span>
        </nav>

        {/* Main Grid: Sidebar + Product Grid */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LEFT SIDEBAR: FILTERS */}
          <aside className="w-full lg:w-64 border border-gray-200 rounded-2xl p-5 space-y-6 shrink-0">
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
              <h2 className="text-xl font-bold text-black">Filters</h2>
              <svg className="w-5 h-5 text-gray-500 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>

            {/* Categories */}
            <div className="border-b border-gray-200 pb-5 space-y-3 text-sm text-gray-600 font-medium">
              {['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'].map((category) => (
                <div key={category} className="flex justify-between items-center cursor-pointer hover:text-black">
                  <span>{category}</span>
                  <span>&gt;</span>
                </div>
              ))}
            </div>

            {/* Price Range */}
            <div className="border-b border-gray-200 pb-5 space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-black text-base">Price</h3>
                <span className="text-xs font-semibold text-gray-500">${priceRange}</span>
              </div>
              <input
                type="range"
                min="50"
                max="300"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full accent-black cursor-pointer"
              />
              <div className="flex justify-between text-xs font-bold text-black">
                <span>$50</span>
                <span>$300</span>
              </div>
            </div>

            {/* Colors */}
            <div className="border-b border-gray-200 pb-5 space-y-3">
              <h3 className="font-bold text-black text-base">Colors</h3>
              <div className="flex flex-wrap gap-2.5">
                {['#00C12B', '#F52525', '#F5DD06', '#F57906', '#06CAF5', '#063AF5', '#7D06F5', '#F506A4', '#FFFFFF', '#000000'].map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    style={{ backgroundColor: color }}
                    className={`w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center transition-all ${
                      selectedColor === color ? 'ring-2 ring-black ring-offset-1' : ''
                    }`}
                  >
                    {selectedColor === color && (
                      <span className={`text-xs ${color === '#FFFFFF' ? 'text-black' : 'text-white'}`}>✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="border-b border-gray-200 pb-5 space-y-3">
              <h3 className="font-bold text-black text-base">Size</h3>
              <div className="flex flex-wrap gap-2">
                {['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      selectedSize === size ? 'bg-black text-white' : 'bg-[#F0EEED] text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Dress Style */}
            <div className="space-y-3 text-sm text-gray-600 font-medium">
              <h3 className="font-bold text-black text-base">Dress Style</h3>
              {['Casual', 'Formal', 'Party', 'Gym'].map((style) => (
                <div key={style} className="flex justify-between items-center cursor-pointer hover:text-black">
                  <span>{style}</span>
                  <span>&gt;</span>
                </div>
              ))}
            </div>

            <button type="button" className="w-full bg-black text-white font-medium py-3 rounded-full text-sm hover:bg-gray-800 transition-colors mt-4">
              Apply Filter
            </button>
          </aside>

          {/* RIGHT SIDE: PRODUCTS AREA */}
          <section className="flex-1 w-full">
            
            {/* Header / Sorting */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
              <h1 className="text-2xl md:text-3xl font-extrabold text-black">Casual</h1>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
                <span>Showing 1-9 of 100 Products</span>
                <span className="hidden sm:inline">|</span>
                <div className="flex items-center space-x-1">
                  <span>Sort by:</span>
                  <select className="font-bold text-black border-none bg-transparent outline-none cursor-pointer">
                    <option>Most Popular</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* PRODUCT CARDS GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {products.map((item) => (
                <Link 
                  key={item.id} 
                  to={`/product/${item.id}`} 
                  className="group cursor-pointer block"
                >
                  <div className="bg-[#F0EEED] rounded-2xl p-4 mb-3 flex items-center justify-center h-48 md:h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="font-bold text-black text-sm md:text-base truncate group-hover:text-gray-700">
                    {item.name}
                  </h3>

                  <div className="flex items-center space-x-1 my-1">
                    <div className="flex space-x-0.5">{renderStars(item.rating)}</div>
                    <span className="text-xs text-gray-500">{item.rating}/5</span>
                  </div>

                  <div className="flex items-center space-x-2 mt-2">
                    <span className="font-bold text-black text-base md:text-lg">${item.price}</span>
                    {item.originalPrice && (
                      <span className="text-gray-400 text-xs md:text-sm line-through font-bold">${item.originalPrice}</span>
                    )}
                    {item.discount && (
                      <span className="text-[10px] md:text-xs font-semibold bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
                        {item.discount}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-10 border-t border-gray-200 pt-5 flex justify-between items-center">
              <button type="button" className="border border-gray-200 px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-black hover:bg-gray-100 flex items-center gap-1">
                &larr; Previous
              </button>
              
              <div className="flex space-x-1 text-xs md:text-sm font-medium">
                <button type="button" className="w-8 h-8 rounded-lg bg-gray-100 text-black font-bold">1</button>
                <button type="button" className="w-8 h-8 rounded-lg text-gray-500 hover:bg-gray-50">2</button>
                <button type="button" className="w-8 h-8 rounded-lg text-gray-500 hover:bg-gray-50">3</button>
                <span className="w-8 h-8 flex items-center justify-center text-gray-400">...</span>
                <button type="button" className="w-8 h-8 rounded-lg text-gray-500 hover:bg-gray-50">10</button>
              </div>

              <button type="button" className="border border-gray-200 px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-black hover:bg-gray-100 flex items-center gap-1">
                Next &rarr;
              </button>
            </div>

          </section>
        </div>
      </main>

    </div>
  );
};

export default CategoryPage;