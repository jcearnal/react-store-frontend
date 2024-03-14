// Import React and the Link component from react-router-dom for navigation
import React from 'react';
import { Link } from 'react-router-dom'; 

// Functional component to display individual product information
function Product({ id, name, image, price, onAddToCart }) {
  // Renders the product's details including the image, name, and price.
  // Also provides View Details and Add to Cart buttons.
  return (
    <div className="product">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>${price}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
          <button style={{ marginRight: '10px' }}>View Details</button>
        </Link>
        <button onClick={onAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product; // Exports the Product component for use in other parts of the app
