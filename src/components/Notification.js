import React from 'react';
import { useCart } from '../context/CartContext'; 

const Notification = () => {
  const { isItemAdded } = useCart();

  if (!isItemAdded) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      background: 'green',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
    }}>
      Item added to cart!
    </div>
  );
};

export default Notification;
