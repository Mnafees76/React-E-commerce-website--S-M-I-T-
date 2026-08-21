import React, { useRef } from 'react';

const reviews = [
  {
    id: 1,
    name: 'Sarah M.',
    isVerified: true,
    rating: 5,
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations!"
  },
  {
    id: 2,
    name: 'Alex K.',
    isVerified: true,
    rating: 5,
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
  },
  {
    id: 3,
    name: 'James L.',
    isVerified: true,
    rating: 5,
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
  },
  {
    id: 4,
    name: 'Mooen P.',
    isVerified: true,
    rating: 5,
    text: "The customer service was exceptional, and the delivery was extremely fast. The fabric quality is top-notch and feels very premium for the price!"
  },
  {
    id: 5,
    name: 'Samantha D.',
    isVerified: true,
    rating: 5,
    text: "I order all my clothes from here now. The sizing is accurate and everything fits perfectly right out of the box."
  },
  {
    id: 6,
    name: 'Ethan R.',
    isVerified: true,
    rating: 5,
    text: "Great variety of modern styles. I'm very satisfied with my purchases and will definitely be ordering again!"
  }
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header with Title and Arrows */}
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight">
            OUR HAPPY CUSTOMERS
          </h2>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleScroll('left')}
              className="p-1.5 text-black hover:opacity-60 transition-opacity cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-1.5 text-black hover:opacity-60 transition-opacity cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* 6 Cards Slider */}
        <div
          ref={scrollRef}
          className="flex space-x-5 overflow-x-auto scrollbar-none scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="w-[350px] md:w-[400px] border border-gray-200 rounded-3xl p-6 md:p-7 flex flex-col justify-between shrink-0 bg-white"
            >
              <div className="space-y-3">
                {/* 5 Stars Rating */}
                <div className="flex text-yellow-400 space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Name & Green Verified Tick */}
                <div className="flex items-center space-x-1.5">
                  <span className="font-bold text-lg text-black">{review.name}</span>
                  {review.isVerified && (
                    <span className="bg-[#01B036] text-white rounded-full p-0.5 inline-flex items-center justify-center w-4 h-4 text-[9px] font-bold">
                      ✓
                    </span>
                  )}
                </div>

                {/* Text */}
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  "{review.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;