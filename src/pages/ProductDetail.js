import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useProducts } from '../context/ProductsContext';

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { products } = useProducts();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productDetail = products.find(product => product.id.toString() === id);
    setProduct(productDetail);
  }, [id, products]); 

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} style={{ maxHeight: '300px', width: 'auto', marginTop: '20px' }}  />
      <h2>{product.name}</h2>
      <p>{product.description ? product.description : "This is a detailed description of the product."}</p> {/* Fallback description */}
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
