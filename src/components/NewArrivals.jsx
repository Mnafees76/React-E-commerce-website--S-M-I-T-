import React, { useState, useEffect } from 'react';

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Backend se products fetch karne ka function
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center py-8 text-slate-500">Loading new arrivals...</div>;
  }

  return (
    <section className="py-8 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">New Arrivals</h2>

      {products.length === 0 ? (
        <p className="text-center text-slate-400">Abhi koi product available nahi hai.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product._id} className="bg-white rounded-2xl shadow-sm border p-4 flex flex-col justify-between">
              <div>
                <img 
                  src={product.image || "https://via.placeholder.com/150"} 
                  alt={product.name} 
                  className="w-full h-48 object-cover rounded-xl mb-3"
                />
                <h3 className="font-bold text-slate-800 text-lg">{product.name}</h3>
                <p className="text-sm text-slate-500 line-clamp-2 mt-1">{product.description}</p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-indigo-600 font-bold text-base">Rs. {product.price}</span>
                <button className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default NewArrivals;