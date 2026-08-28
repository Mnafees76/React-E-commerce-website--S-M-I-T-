// src/components/TopSelling.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Product Data
const products = [
  {
    id: 1,
    name: 'Vertical Striped Shirt',
    image: './images/Frame .png',
    rating: 5.0,
    currentPrice: 212,
    originalPrice: 232,
    discount: '-20%',
  },
  {
    id: 2,
    name: 'Courage Graphic T-shirt',
    image: './images/shart.png',
    rating: 4.0,
    currentPrice: 145,
    originalPrice: null,
    discount: null,
  },
  {
    id: 3,
    name: 'Loose Fit Bermuda Shorts',
    image: './images/Frame 34.png',
    rating: 3.0,
    currentPrice: 80,
    originalPrice: null,
    discount: null,
  },
  {
    id: 4,
    name: 'Faded Skinny Jeans',
    image: './images/Frame 38 (1).png',
    rating: 4.5,
    currentPrice: 210,
    originalPrice: null,
    discount: null,
  },
];

// Helper component for Star Rating
const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center space-x-1 text-xs">
      <div className="flex text-yellow-400 space-x-0.5">
        {[...Array(5)].map((_, i) => (
          <i
            key={i}
            className={`fas fa-star ${
              i < fullStars
                ? ''
                : i === fullStars && hasHalfStar
                ? 'fa-star-half-alt'
                : 'text-gray-300'
            }`}
          ></i>
        ))}
      </div>
      <span className="text-gray-600 font-medium ml-1">{rating.toFixed(1)}/5</span>
    </div>
  );
};

const TopSelling = () => {
  return (
    <div className="bg-white py-12 md:py-16">
      <main className="max-w-7xl mx-auto px-6 md:px-8">
        <header className="mb-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight uppercase">
            TOP SELLING
          </h2>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              state={{ product }}
              className="flex flex-col space-y-3 cursor-pointer group no-underline text-inherit"
            >
              {/* Image Container - Figma Light Gray Background */}
              <div className="w-full h-64 md:h-72 bg-[#F0EEED] rounded-2xl flex items-center justify-center p-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Details */}
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-black truncate">
                  {product.name}
                </h3>

                <Rating rating={product.rating} />

                {/* Price */}
                <div className="flex items-center space-x-2 pt-1">
                  <span className="text-xl font-extrabold text-black">
                    ${product.currentPrice}
                  </span>
                  {product.originalPrice && (
                    <span className="text-base font-bold text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                  {product.discount && (
                    <span className="text-xs font-semibold bg-red-100 text-red-600 px-2.5 py-0.5 rounded-full">
                      {product.discount}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </section>

        <footer className="mt-10 flex justify-center border-b border-gray-200 pb-16">
          <button className="border border-gray-300 text-black px-14 py-3 rounded-full font-medium text-sm hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer">
            View All
          </button>
        </footer>
      </main>
    </div>
  );
};

export default TopSelling;