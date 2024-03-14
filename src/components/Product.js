import React from 'react';
import { Link } from 'react-router-dom'; 

function Product({ id, name, image, price, onAddToCart }) {
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

export default Product;
