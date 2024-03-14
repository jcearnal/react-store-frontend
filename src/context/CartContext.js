import React, { createContext, useContext, useState } from 'react';

// Create the cart context
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isItemAdded, setIsItemAdded] = useState(false);

  const addToCart = (product) => {
    console.log("Adding to cart:", product);
    console.log("Before adding to cart", cartItems); // Log current cart items
    setCartItems(prevItems => {
      const itemExists = prevItems.find(item => item.id === product.id);
      if (itemExists) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    setIsItemAdded(true); 
    setTimeout(() => setIsItemAdded(false), 3000); // Hide the popup after 3 seconds
    console.log("After adding to cart", cartItems); 
  };
  

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isItemAdded, clearCart }}>
        {children}
    </CartContext.Provider>
  );
};
