// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import NewArrivals from './components/NewArrivals'
import ProductDetail from './pages/ProductDetail'
// File name ke exact small 'c' casing ke sath import
import CategoryPage from './pages/categoryPage' 
import MainNavbar from './components/MainNavbar'
import TopNavbar from './components/TopNavbar'
import TopSelling from './components/TopSelling'
import BrowseByStyle from './components/BrowseByStyle'
import Hero from './components/Hero' 
import Testimonials from './components/TestimonialsPage'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'
import CartPage from './pages/CartPage'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans flex flex-col">
      <TopNavbar />
      <MainNavbar />
      
      <div className="grow">
        <Routes>
          {/* Main Home Route */}
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <NewArrivals />
                <TopSelling />
                <BrowseByStyle />
                <Testimonials />
                
              </>
            } 
          /> 
          
          {/* Direct Route /casual ke liye */}
          <Route path="/casual" element={<CategoryPage />} />

          {/* Dynamic Route baki categories ke liye */}
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          
          {/* Product Detail Route */}
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
            {/* Outer Wrapper for Floating Newsletter & Footer */}
      { <div className="relative mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mb-20">
          <Newsletter />
        </div>
        <Footer />
      </div> }
      </div>
    </div>
  )
}

export default App