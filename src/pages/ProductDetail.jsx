import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Product Data
  const product = location.state?.product || {
    id: 1,
    name: 'ONE LIFE GRAPHIC T-SHIRT',
    rating: 4.5,
    currentPrice: 260,
    originalPrice: 300,
    discount: '-40%',
    description: 'This graphic t-shirt is perfect for any occasion. Crafted on soft and breathable fabric, it offers superior comfort and style.',
    colors: ['#4F4631', '#314F4F', '#0F2A4A'],
    images: [
      'https://via.placeholder.com/400x400/4F4631/FFFFFF?text=Front+View',
      'https://via.placeholder.com/400x400/314F4F/FFFFFF?text=Back+View',
      'https://via.placeholder.com/400x400/0F2A4A/FFFFFF?text=Model+View',
    ]
  };

  // Safe image list handling
  const imageList = product.images && product.images.length > 0 
    ? product.images 
    : [product.image, product.image, product.image];
    
  const colorList = product.colors || ['#4F4631', '#314F4F', '#0F2A4A'];

  // Reviews Data
  const reviewsData = [
    {
      id: 1,
      name: 'Samantha D.',
      isVerified: true,
      rating: 4.5,
      text: "I absolutely love this t-shirt! The design is unique and the fabric feels so soft and comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      date: 'Posted on August 14, 2023'
    },
    {
      id: 2,
      name: 'Alex M.',
      isVerified: true,
      rating: 4,
      text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      date: 'Posted on August 15, 2023'
    },
    {
      id: 3,
      name: 'Ethan R.',
      isVerified: true,
      rating: 3.5,
      text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
      date: 'Posted on August 16, 2023'
    },
    {
      id: 4,
      name: 'Olivia P.',
      isVerified: true,
      rating: 4,
      text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
      date: 'Posted on August 17, 2023'
    },
    {
      id: 5,
      name: 'Liam K.',
      isVerified: true,
      rating: 4,
      text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
      date: 'Posted on August 18, 2023'
    },
    {
      id: 6,
      name: 'Ava H.',
      isVerified: true,
      rating: 4.5,
      text: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
      date: 'Posted on August 19, 2023'
    }
  ];

  // Related Products Data with 3 images each
  const relatedProducts = [
    {
      id: 101,
      name: 'Polo with Contrast Trims',
      rating: 4.0,
      currentPrice: 212,
      originalPrice: 242,
      discount: '-20%',
      description: 'This classic polo shirt features stylish contrast trimming on the collar and sleeves, made with high-quality breathable fabric.',
      colors: ['#008080', '#333333'],
      images: [
        'https://via.placeholder.com/400x400/008080/FFFFFF?text=Polo+Trims+1',
        'https://via.placeholder.com/400x400/333333/FFFFFF?text=Polo+Trims+2',
        'https://via.placeholder.com/400x400/008080/FFFFFF?text=Polo+Trims+3',
      ],
      image: 'https://via.placeholder.com/300x300/008080/FFFFFF?text=Polo+Trims'
    },
    {
      id: 102,
      name: 'Gradient Graphic T-shirt',
      rating: 3.5,
      currentPrice: 145,
      description: 'A modern t-shirt featuring a subtle gradient graphic pattern. Perfect for casual weekend outings.',
      colors: ['#E6E6FA', '#000000'],
      images: [
        'https://via.placeholder.com/400x400/E6E6FA/000000?text=Gradient+Tee+1',
        'https://via.placeholder.com/400x400/000000/FFFFFF?text=Gradient+Tee+2',
        'https://via.placeholder.com/400x400/E6E6FA/000000?text=Gradient+Tee+3',
      ],
      image: 'https://via.placeholder.com/300x300/E6E6FA/000000?text=Gradient+Tee'
    },
    {
      id: 103,
      name: 'Polo with Tipping Details',
      rating: 4.5,
      currentPrice: 180,
      description: 'Elegantly designed polo with clean tipping details along the edges. Smooth, comfortable, and versatile.',
      colors: ['#DB7093', '#4F4631'],
      images: [
        'https://via.placeholder.com/400x400/DB7093/FFFFFF?text=Polo+Tipping+1',
        'https://via.placeholder.com/400x400/4F4631/FFFFFF?text=Polo+Tipping+2',
        'https://via.placeholder.com/400x400/DB7093/FFFFFF?text=Polo+Tipping+3',
      ],
      image: 'https://via.placeholder.com/300x300/DB7093/FFFFFF?text=Polo+Tipping'
    },
    {
      id: 104,
      name: 'Black Striped T-shirt',
      rating: 5.0,
      currentPrice: 120,
      originalPrice: 150,
      discount: '-30%',
      description: 'Timeless black striped t-shirt made from pure soft cotton. Fits comfortably for daily wear.',
      colors: ['#333333', '#000000'],
      images: [
        'https://via.placeholder.com/400x400/333333/FFFFFF?text=Black+Striped+1',
        'https://via.placeholder.com/400x400/000000/FFFFFF?text=Black+Striped+2',
        'https://via.placeholder.com/400x400/333333/FFFFFF?text=Black+Striped+3',
      ],
      image: 'https://via.placeholder.com/300x300/333333/FFFFFF?text=Black+Striped'
    }
  ];

  // State
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(colorList[0]);
  const [selectedSize, setSelectedSize] = useState('Large');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('rating');

  // Handle Card Click Navigation
  const handleProductClick = (item) => {
    navigate(`/product/${item.id}`, { state: { product: item } });
    setSelectedImageIndex(0);
    setSelectedColor(item.colors ? item.colors[0] : '#000000');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Pure SVG Render Function for reliable Yellow Stars
  const renderStars = (rating) => {
    if (!rating) return null;
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(
          <svg key={i} className="w-5 h-5 text-[#FFC633] fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(
          <div key={i} className="relative w-5 h-5">
            <svg className="w-5 h-5 text-gray-200 fill-current absolute" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <div className="overflow-hidden w-1/2 absolute top-0 left-0">
              <svg className="w-5 h-5 text-[#FFC633] fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
          </div>
        );
      } else {
        stars.push(
          <svg key={i} className="w-5 h-5 text-gray-200 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <div className="bg-white min-h-screen font-sans flex flex-col justify-between">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-grow w-full">
        
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500 flex items-center space-x-2">
          <Link to="/" className="hover:text-black">Home</Link>
          <span>&gt;</span>
          <span className="hover:text-black cursor-pointer">Shop</span>
          <span>&gt;</span>
          <span className="hover:text-black cursor-pointer">Men</span>
          <span>&gt;</span>
          <span className="text-black font-medium">{product.name}</span>
        </nav>

        {/* Top Product Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Product Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-3">
              {imageList.map((thumb, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-20 h-24 md:w-24 md:h-28 rounded-2xl p-2 bg-[#F0EEED] flex items-center justify-center cursor-pointer transition-all ${
                    selectedImageIndex === index ? 'border-2 border-black' : 'border border-transparent hover:border-gray-300'
                  }`}
                >
                  <img src={thumb} alt="" className="max-h-full max-w-full object-contain rounded-xl" />
                </button>
              ))}
            </div>
            
            <div className="bg-[#F0EEED] rounded-3xl p-6 flex items-center justify-center flex-grow min-h-[350px] md:min-h-[450px]">
              <img src={imageList[selectedImageIndex] || imageList[0]} alt={product.name} className="max-h-[350px] object-contain" />
            </div>
          </div>

          {/* Product Details & Purchase Form */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-black text-black uppercase tracking-tight">{product.name}</h1>
              <div className="flex items-center space-x-2 mt-3">
                <div className="flex space-x-1">{renderStars(product.rating)}</div>
                <span className="text-sm text-gray-600 font-medium">{product.rating}/5</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-3xl font-bold text-black">${product.currentPrice}</span>
              {product.originalPrice && <span className="text-2xl font-bold text-gray-400 line-through">${product.originalPrice}</span>}
              {product.discount && <span className="text-xs font-medium bg-red-100 text-red-600 px-3 py-1 rounded-full">{product.discount}</span>}
            </div>

            <p className="text-gray-500 text-sm leading-relaxed border-t border-gray-200 pt-5">{product.description}</p>

            {/* Color Options */}
            <div className="border-t border-gray-200 pt-5 space-y-3">
              <h3 className="text-sm font-medium text-gray-500">Select Colors</h3>
              <div className="flex space-x-3">
                {colorList.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color)}
                    className={`w-9 h-9 rounded-full flex items-center justify-center border ${selectedColor === color ? 'ring-2 ring-black' : ''}`}
                    style={{ backgroundColor: color }}
                  >
                    {selectedColor === color && (
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Options */}
            <div className="border-t border-gray-200 pt-5 space-y-3">
              <h3 className="text-sm font-medium text-gray-500">Choose Size</h3>
              <div className="flex flex-wrap gap-3">
                {['Small', 'Medium', 'Large', 'X-Large'].map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                      selectedSize === size ? 'bg-black text-white' : 'bg-[#F0EEED] text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="border-t border-gray-200 pt-5 flex gap-4">
              <div className="flex items-center bg-[#F0EEED] rounded-full px-4 py-3">
                <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))} className="text-xl px-2 text-black font-bold">-</button>
                <span className="text-base font-bold text-black w-10 text-center select-none">{quantity}</span>
                <button onClick={() => setQuantity(prev => prev + 1)} className="text-xl px-2 text-black font-bold">+</button>
              </div>

              <button className="flex-1 bg-black text-white font-medium py-3.5 px-6 rounded-full hover:bg-gray-800 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mt-16 border-b border-gray-200 flex justify-between text-center">
          <button
            onClick={() => setActiveTab('details')}
            className={`pb-4 flex-1 text-sm sm:text-base md:text-lg transition-all ${
              activeTab === 'details' ? 'border-b-2 border-black font-bold text-black' : 'text-gray-400 font-medium'
            }`}
          >
            Product Details
          </button>
          <button
            onClick={() => setActiveTab('rating')}
            className={`pb-4 flex-1 text-sm sm:text-base md:text-lg transition-all ${
              activeTab === 'rating' ? 'border-b-2 border-black font-bold text-black' : 'text-gray-400 font-medium'
            }`}
          >
            Rating & Reviews
          </button>
          <button
            onClick={() => setActiveTab('faqs')}
            className={`pb-4 flex-1 text-sm sm:text-base md:text-lg transition-all ${
              activeTab === 'faqs' ? 'border-b-2 border-black font-bold text-black' : 'text-gray-400 font-medium'
            }`}
          >
            FAQs
          </button>
        </div>

        {/* Tab Content Panels */}
        <div className="py-8">
          {activeTab === 'rating' && (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h3 className="text-xl font-extrabold text-black flex items-center gap-2">
                  All Reviews <span className="text-xs text-gray-400 font-normal">(451)</span>
                </h3>

                <div className="flex items-center space-x-3 self-end sm:self-auto">
                  <button className="w-10 h-10 bg-[#F0EEED] rounded-full flex items-center justify-center text-black hover:bg-gray-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </button>
                  <select className="bg-[#F0EEED] text-black font-medium text-sm px-4 py-2.5 rounded-full border-none outline-none cursor-pointer">
                    <option>Latest</option>
                    <option>Oldest</option>
                    <option>Highest Rating</option>
                  </select>
                  <button className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800">
                    Write a Review
                  </button>
                </div>
              </div>

              {/* Review Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {reviewsData.map((review) => (
                  <div key={review.id} className="border border-gray-200/80 rounded-3xl p-6 space-y-3 relative bg-white">
                    <button className="absolute top-6 right-6 text-gray-400 hover:text-black">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>

                    <div className="flex space-x-1">
                      {renderStars(review.rating)}
                    </div>

                    <div className="flex items-center space-x-1.5">
                      <span className="font-bold text-black text-base">{review.name}</span>
                      {review.isVerified && (
                        <span className="bg-[#01B036] text-white rounded-full p-0.5 inline-flex items-center justify-center w-4 h-4 text-[9px] font-bold">
                          ✓
                        </span>
                      )}
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed">
                      "{review.text}"
                    </p>

                    <p className="text-gray-400 text-xs font-medium pt-2">
                      {review.date}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center pt-6">
                <button className="border border-gray-200 px-10 py-3 rounded-full text-sm font-medium text-black hover:bg-black hover:text-white transition-colors">
                  Load More Reviews
                </button>
              </div>

            </div>
          )}

          {activeTab === 'details' && (
            <div className="text-gray-600 text-sm space-y-2">
              <h3 className="text-lg font-bold text-black">Product Details</h3>
              <p>Made with high quality cotton materials for optimal daily comfort.</p>
            </div>
          )}

          {activeTab === 'faqs' && (
            <div className="text-gray-600 text-sm space-y-2">
              <h3 className="text-lg font-bold text-black">Frequently Asked Questions</h3>
              <p>Contact support for any order-related queries.</p>
            </div>
          )}
        </div>

        {/* Related Products Section */}
        <section className="mt-16 pt-10 border-t border-gray-100">
          <h2 className="text-3xl md:text-4xl font-black text-center text-black uppercase tracking-tight mb-10">
            YOU MIGHT ALSO LIKE
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((item) => (
              <div 
                key={item.id} 
                onClick={() => handleProductClick(item)} 
                className="group cursor-pointer"
              >
                <div className="bg-[#F0EEED] rounded-2xl p-4 mb-3 flex items-center justify-center h-48 md:h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="font-bold text-black text-sm md:text-base truncate group-hover:text-gray-700 transition-colors">
                  {item.name}
                </h3>
                
                <div className="flex items-center space-x-2 my-1">
                  <div className="flex space-x-0.5">
                    {renderStars(item.rating)}
                  </div>
                  <span className="text-xs text-gray-500">{item.rating}/5</span>
                </div>

                <div className="flex items-center space-x-2 mt-2">
                  <span className="font-bold text-black text-base md:text-xl">${item.currentPrice}</span>
                  {item.originalPrice && (
                    <span className="text-gray-400 text-xs md:text-sm line-through font-bold">${item.originalPrice}</span>
                  )}
                  {item.discount && (
                    <span className="text-[10px] md:text-xs font-semibold bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
                      {item.discount}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

    </div>
  );
};

export default ProductDetail;