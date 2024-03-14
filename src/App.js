import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ProductsProvider } from './context/ProductsContext'; 
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Search from './pages/Search';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import './App.css';
import ThankYou from './components/ThankYou';
import Navbar from './components/Navbar';
import Notification from './components/Notification';

function App() {
  
  return (
    <ProductsProvider>
      <CartProvider>
        <Router>
          <div className="App">
            <Navbar />
            <Notification />
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

export default App;
