import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  // Access cartItems from the cart context to dynamically display item count in the navbar
  const { cartItems } = useCart();
  // Calculating total number of items in the cart for display
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/">Home</Link>
        <Link to="/search">Our Products</Link>
        {/* Dynamically display the number of items in the cart next to the Cart link */}
        <Link to="/cart">Cart ({itemCount})</Link>
      </div>
      <div className="navbar-right">
        {/* Render the Checkout link only if there are items in the cart */}
        {itemCount > 0 && <Link to="/checkout">Checkout</Link>}
      </div>
    </div>
  );
};

export default Navbar;
