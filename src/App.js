// Import necessary React and React Router DOM functionalities routing
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import context providers to wrap around the app for state management
import { CartProvider } from './context/CartContext';
import { ProductsProvider } from './context/ProductsContext'; 

// Import all page components used in the application
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Search from './pages/Search';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ThankYou from './components/ThankYou';

// Import component and styling
import Navbar from './components/Navbar';
import Notification from './components/Notification';
import './App.css'; // Application-wide styles

function App() {
  // Wrap the entire app with both ProductsProvider and CartProvider to ensure all components
  // have access to the context provided by these providers.
  return (
    <ProductsProvider>
      <CartProvider>
        <Router>
          <div className="App">
            {/* Navbar displayed across all pages */}
            <Navbar />
            {/* Notification component to show alerts when item is added to the cart */}
            <Notification />
            {/* Router setup to handle navigation between different components based on URL path */}
            <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/product/:id" element={<ProductDetail />} /> 
              <Route path="/search" element={<Search />} /> 
              <Route path="/cart" element={<Cart />} /> 
              <Route path="/checkout" element={<Checkout />} /> 
              <Route path="/thank-you" element={<ThankYou />} /> 
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App; // Export App component for use in index.js
