import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  // Accessing the cart context for cart operations and items
  const { cartItems, removeFromCart, clearCart } = useCart();
  // useNavigate hook for redirecting to the checkout page
  const navigate = useNavigate();

  // Calculating the total price of items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
              </div>
            </div>
          ))}
          <div className="total">
            <h3>Total Price: ${totalPrice}</h3>
          </div>
          <div className="checkout-button-container">
            <button onClick={clearCart} className="clear-cart-button">Clear Cart</button>
            <button onClick={() => navigate('/checkout')} className="proceed-to-checkout-button">Proceed to Checkout</button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
