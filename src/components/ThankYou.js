import React from 'react';
import { Link } from 'react-router-dom';

function ThankYou() {
  return (
    <div className="thank-you">
      <h2>Thank You for Your Order!</h2>
      <p>Your order has been received and is being processed.</p>
      <p>We will send you a confirmation email shortly.</p>
      <Link to="/">Return Home</Link>
    </div>
  );
}

export default ThankYou;
