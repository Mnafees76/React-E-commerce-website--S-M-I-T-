// src/components/MainNavbar.jsx
import { useState } from 'react';
// 1. React Router Components Import Karein
import { Link, NavLink } from 'react-router-dom';

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 2. NavLinks me path property add karein
  const navLinks = [
    { label: 'Shop', path: '/casual', hasDropdown: true }, // Filter/Category Page ka link
    { label: 'On Sale', path: '/on-sale', hasDropdown: false },
    { label: 'New Arrivals', path: '/new-arrivals', hasDropdown: false },
    { label: 'Brands', path: '/brands', hasDropdown: false },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4 lg:gap-10">
        
        {/* Left Section: Mobile Menu Button & Logo */}
        <div className="flex items-center gap-3">
          {/* Hamburger Icon for Mobile */}
          <button 
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-black focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* 3. Logo ko Home link banayein */}
          <Link to="/" className="text-xl sm:text-2xl font-extrabold text-black tracking-tight cursor-pointer">
            SHOP.CO
          </Link>
        </div>

        {/* Center Section: Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-normal text-gray-800">
          {navLinks.map((link, index) => (
            <li key={index}>
              {/* 4. use NavLink for active styling handling */}
              <NavLink 
                to={link.path}
                className={({ isActive }) => 
                  `cursor-pointer group flex items-center gap-1 hover:text-black ${isActive ? 'text-black font-semibold' : ''}`
                }
              >
                {link.label}
                {link.hasDropdown && (
                  <span className="text-xs text-gray-500 group-hover:text-black">▼</span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Center-Right Section: Desktop Search Bar */}
        <div className="hidden md:block flex-1 max-w-xl relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="search"
            placeholder="Search for products..."
            className="w-full bg-[#f3f4f6] text-sm text-black placeholder:text-gray-500 rounded-full pl-10 pr-4 py-2.5 border border-transparent focus:ring-1 focus:ring-gray-300 outline-none"
          />
        </div>

        {/* Right Section: User Icons */}
        <div className="flex items-center gap-3 sm:gap-6 text-gray-800">
          {/* Mobile Search Icon */}
          <button type="button" aria-label="Search" className="md:hidden cursor-pointer hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Cart Icon Link */}
          <Link to="/cart" aria-label="Cart" className="cursor-pointer hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </Link>

          {/* Profile Icon Link */}
          <Link to="/profile" aria-label="Profile" className="cursor-pointer hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>
        </div>

      </div>

      {/* Mobile Drawer / Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3 relative z-40">
          <ul className="flex flex-col gap-3 text-base font-medium text-gray-800">
            {navLinks.map((link, index) => (
              <li key={index}>
                {/* 5. Mobile Link me onClick par menu close karein */}
                <Link 
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                  className="cursor-pointer flex items-center justify-between hover:text-black py-1 w-full"
                >
                  <span>{link.label}</span>
                  {link.hasDropdown && <span className="text-xs text-gray-500">▼</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}