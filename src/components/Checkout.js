import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Checkout() {
  // Accessing the cart's context for item data and to clear the cart upon successful checkout
  const { cartItems, clearCart } = useCart();
  // Hook to programmatically navigate user after form submission
  const navigate = useNavigate();
  // State to manage form data for the checkout process
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Updating local form state based on user input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handling form submission: logs the order, clears the cart, and navigates to the thank you page
  const handleSubmit = (e) => {
    e.preventDefault();    
    console.log('Order submitted:', formData, cartItems);

    clearCart(); 
    navigate('/thank-you'); 
  };

  // Render the checkout form and dynamically display the cart's total price and itemized list
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <h3>Your Order:</h3>
          {cartItems.map(item => (
            <div key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
            </div>
          ))}
          <p>Total: ${totalPrice}</p>
        </div>
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
}

export default Checkout;