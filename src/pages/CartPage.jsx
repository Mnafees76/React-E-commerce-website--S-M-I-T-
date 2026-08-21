import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  // Cart Items State
 const [cartItems, setCartItems] = useState([]);

  const [promoCode, setPromoCode] = useState('');

  // Quantity Handlers
  const handleQuantityChange = (id, type) => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) {
          const newQty = type === 'increase' ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: Math.max(1, newQty) };
        }
        return item;
      })
    );
  };

  // Delete Item Handler
  const handleDelete = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Calculations (With Math.round to avoid decimal issues)
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountPercent = 0.20; // 20% Discount
  const discountAmount = Math.round(subtotal * discountPercent);
  const deliveryFee = subtotal > 0 ? 15 : 0;
  const total = subtotal - discountAmount + deliveryFee;

  return (
    <div className="bg-white min-h-screen font-sans flex flex-col justify-between">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-grow">
        
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 text-sm text-gray-500 flex items-center space-x-2">
          <Link to="/" className="hover:text-black">Home</Link>
          <span>&gt;</span>
          <span className="text-black font-medium">Cart</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-black mb-6 uppercase tracking-tight">
          Your Cart
        </h1>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-5 items-start">
          
          {/* LEFT COLUMN: Cart Items List */}
          <div className="w-full lg:w-[60%] border border-gray-200 rounded-2xl p-4 sm:p-6 space-y-4">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div key={item.id}>
                  <div className="flex items-center justify-between gap-4 py-2">
                    {/* Product Image */}
                    <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#F0EEED] rounded-xl flex-shrink-0 flex items-center justify-center p-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="max-h-full object-contain"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-black text-base sm:text-lg truncate">
                          {item.name}
                        </h3>
                        {/* Red Delete Icon */}
                        <button
                          type="button"
                          onClick={() => handleDelete(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors ml-2"
                        >
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>

                      <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                        Size: <span className="text-gray-700">{item.size}</span>
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 mb-2">
                        Color: <span className="text-gray-700">{item.color}</span>
                      </p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="font-bold text-black text-lg sm:text-xl">
                          ${item.price}
                        </span>

                        {/* Quantity Counter */}
                        <div className="flex items-center bg-[#F0EEED] rounded-full px-3 py-1 space-x-3">
                          <button
                            type="button"
                            onClick={() => handleQuantityChange(item.id, 'decrease')}
                            className="text-black font-bold text-base hover:text-gray-600"
                          >
                            -
                          </button>
                          <span className="text-sm font-semibold text-black">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleQuantityChange(item.id, 'increase')}
                            className="text-black font-bold text-base hover:text-gray-600"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider Line */}
                  {index !== cartItems.length - 1 && (
                    <hr className="border-gray-200 my-3" />
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-10 text-gray-500">
                Your cart is currently empty.
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Order Summary */}
          <div className="w-full lg:w-[40%] border border-gray-200 rounded-2xl p-5 sm:p-6 space-y-5">
            <h2 className="text-xl font-bold text-black">Order Summary</h2>

            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span className="font-bold text-black">${subtotal}</span>
              </div>

              <div className="flex justify-between text-gray-500">
                <span>Discount (-20%)</span>
                <span className="font-bold text-red-500">-${discountAmount}</span>
              </div>

              <div className="flex justify-between text-gray-500">
                <span>Delivery Fee</span>
                <span className="font-bold text-black">${deliveryFee}</span>
              </div>

              <hr className="border-gray-200 my-2" />

              <div className="flex justify-between text-black font-bold text-lg sm:text-xl">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>

            {/* Promo Code Input */}
            <div className="flex gap-2">
              <div className="relative flex-1">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Add promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="w-full bg-[#F0EEED] text-black text-sm rounded-full pl-10 pr-4 py-3 outline-none"
                />
              </div>
              <button
                type="button"
                className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Apply
              </button>
            </div>

            {/* Go to Checkout Button */}
            <button
              type="button"
              className="w-full bg-black text-white font-medium py-3.5 rounded-full text-sm sm:text-base hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Go to Checkout</span>
              <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default CartPage;