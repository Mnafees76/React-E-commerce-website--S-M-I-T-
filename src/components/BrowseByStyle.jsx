import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    title: 'Casual',
    image: '/images/casual.png', // Apni image Path lagayein
    link: '/category/casual',
    colSpan: 'md:col-span-1',
  },
  {
    id: 2,
    title: 'Formal',
    image: '/images/formal.png', // Apni image Path lagayein
    link: '/category/formal',
    colSpan: 'md:col-span-2',
  },
  {
    id: 3,
    title: 'Party',
    image: '/images/party.png', // Apni image Path lagayein
    link: '/category/party',
    colSpan: 'md:col-span-2',
  },
  {
    id: 4,
    title: 'Gym',
    image: '/images/gym.png', // Apni image Path lagayein
    link: '/category/gym',
    colSpan: 'md:col-span-1',
  },
];

const BrowseByStyle = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Light Gray Outer Box */}
      <div className="bg-[#f5efef] rounded-[40px] p-6 sm:p-10 md:p-16">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-5xl font-black text-center text-black uppercase tracking-tight mb-8 sm:mb-14">
          BROWSE BY DRESS STYLE
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className={`relative bg-white h-50 sm:h-70 rounded-3xl overflow-hidden group transition-all duration-300 hover:shadow-lg ${category.colSpan}`}
            >
              {/* Category Title */}
              <span className="absolute top-6 left-6 text-2xl md:text-3xl font-bold text-black z-10">
                {category.title}
              </span>

              {/* Category Image */}
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover object-top sm:object-right group-hover:scale-105 transition-transform duration-500"
              />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrowseByStyle;