import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 

const Navbar = () => {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/">Home</Link>
        <Link to="/search">Our Products</Link>
        <Link to="/cart">Cart ({itemCount})</Link>
      </div>
      <div className="navbar-right">
        {itemCount > 0 && <Link to="/checkout">Checkout</Link>}
      </div>
    </div>
  );
};

export default Navbar;
