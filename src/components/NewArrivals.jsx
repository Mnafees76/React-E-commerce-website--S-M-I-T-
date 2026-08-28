// src/components/NewArrivals.jsx
import React from 'react';

import { useNavigate } from 'react-router-dom'; // Click handling ke liye

// Mock product data as shown in the image
const productsData = [
  {
    id: 1,
    name: 'T-shirt with Tape Details',
    image: './images/black.png',
    rating: 4.5,
    originalPrice: 120,
    currentPrice: 120,
    discount: null,
    colors: ['#000000', '#FFFFFF', '#6F6F6F'], // For detail page
    description: 'A stylish t-shirt featuring modern tape detailing on the sleeves and collar. Perfect for everyday casual wear.', // For detail page
  },
  {
    id: 2,
    name: 'Skinny Fit Jeans',
    image: './images/pant .png',
    rating: 3.5,
    originalPrice: 260,
    currentPrice: 240,
    discount: '-20%',
    colors: ['#3A5FCD', '#1C39BB'],
    description: 'Classic denim jeans in a sleek skinny fit. Comfortable and versatile, great with any top.',
  },
  {
    id: 3,
    name: 'Checkered Shirt',
    image: './images/image 9.png',
    rating: 4.5,
    originalPrice: 180,
    currentPrice: 180,
    discount: null,
    colors: ['#800000', '#228B22', '#191970'],
    description: 'A traditional flannel-style checkered shirt in bold colors. Cozy and rugged.',
  },
  {
    id: 4,
    name: 'Sleeve Striped T-shirt',
    image: './images/Frame 38.png',
    rating: 4.5,
    originalPrice: 160,
    currentPrice: 130,
    discount: '-30%',
    colors: ['#FF4500', '#FF8C00', '#000000'],
    description: 'A retro-inspired t-shirt with distinctive contrasting stripes on the sleeves. Adds a sporty touch to your look.',
  },
];

const ProductCard = ({ product }) => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star text-yellow-400"></i>);
    }
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt text-yellow-400"></i>);
    }
    // Add empty stars to make it up to 5
    for (let i = Math.ceil(rating); i < 5; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star text-yellow-400"></i>);
    }
    return stars;
  };

  const handleProductClick = () => {
    // Navigate to the detail page and pass product details via state
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div 
      className="bg-white rounded-3xl p-6 shadow-sm flex flex-col items-start space-y-4 border border-gray-100 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={handleProductClick}
    >
      <div className="w-full flex justify-center h-52 items-center">
        <img 
          src={product.image} 
          alt={product.name} 
          className="max-h-full max-w-full object-contain" 
        />
      </div>
      <div className="w-full space-y-2">
        <h3 className="text-xl font-semibold text-gray-800 line-clamp-2 min-h-14">{product.name}</h3>
        <div className="flex items-center space-x-1.5">
          <div className="flex space-x-0.5 text-lg">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-gray-500 font-medium">{product.rating}/5</span>
        </div>
        <div className="flex items-end space-x-2">
          <span className="text-3xl font-extrabold text-gray-900">${product.currentPrice}</span>
          {product.discount && (
            <>
              <span className="text-xl font-medium text-gray-400 line-through">${product.originalPrice}</span>
              <span className="text-sm font-semibold bg-red-100 text-red-600 px-3 py-1 rounded-full">{product.discount}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const NewArrivals = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Optional: Add a subtle patterned background like the image */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes-light.png')]"></div>
      
      <main className="max-w-7xl mx-auto px-6 py-16 md:px-8 md:py-24 relative z-10">
        <header className="mb-12 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-black text-gray-950 tracking-tighter uppercase">New Arrivals</h1>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>

        <footer className="mt-20 flex justify-center">
          <button className="border-2 border-gray-900 text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-950 hover:text-white transition-colors duration-200">
            View All
          </button>
        </footer>
      </main>
    </div>
  );
};


export default NewArrivals;
