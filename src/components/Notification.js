// Importing React and the useCart custom hook to access cart-related state
import React from 'react';
import { useCart } from '../context/CartContext';

// Notification component definition
const Notification = () => {
  // Destructuring to get the isItemAdded state from the cart context
  // This state is used to control the visibility of the notification
  const { isItemAdded } = useCart();

  // If no item has been added recently, don't display anything
  if (!isItemAdded) return null;

  // Rendering the notification with fixed positioning to float over other content
  // This notification appears whenever an item is successfully added to the cart
  return (
    <div style={{
      position: 'fixed', 
      top: '50px', 
      right: '50px', 
      background: 'green', 
      color: 'white', 
      padding: '10px', 
      borderRadius: '5px', 
    }}>
      Item added to cart! 
    </div>
  );
};

export default Notification; // Exporting the component for use elsewhere
