import React, { createContext, useContext, useState } from 'react';

// Initializing a new context for managing the cart's state across the application
const CartContext = createContext();

// Custom hook for easier consumption of cart context in components
export const useCart = () => useContext(CartContext);

// Provider component to encapsulate cart state and logic, making it accessible to child components
export const CartProvider = ({ children }) => {
  // State to track items in the cart
  const [cartItems, setCartItems] = useState([]);
  // State to manage the visibility of an added-to-cart notification
  const [isItemAdded, setIsItemAdded] = useState(false);

  // Function to add products to the cart
  const addToCart = (product) => {
    // Debugging logs to observe the cart's state before and after adding a product
    console.log("Adding to cart:", product);
    console.log("Before adding to cart", cartItems);
    
    // Updating cart items state based on whether the product already exists in the cart
    setCartItems(prevItems => {
      const itemExists = prevItems.find(item => item.id === product.id);
      if (itemExists) {
        // If product exists, increase its quantity
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If new product, add it to the cart with a quantity of 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    // Triggering notification that a product has been added
    setIsItemAdded(true);
    // Automatically hiding the notification after 3 seconds
    setTimeout(() => setIsItemAdded(false), 3000);
    console.log("After adding to cart", cartItems);
  };

  // Function to remove a product from the cart by its ID
  const removeFromCart = (productId) => {
    // Filtering out the product to be removed
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Function to clear all items from the cart
  const clearCart = () => {
    // Resetting cart items to an empty array
    setCartItems([]);
  };

  // Providing the cart state and functions through context to be used by components
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isItemAdded, clearCart }}>
        {children}
    </CartContext.Provider>
  );
};
