import React from 'react';
import { useProducts } from '../context/ProductsContext';
import { useCart } from '../context/CartContext'; 
import Product from './Product';

function Products() {
    const { products } = useProducts();
    const { addToCart } = useCart(); 
  
    return (
      <div className="products">
        {products.map(product => (
          <Product
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            onAddToCart={() => addToCart(product)} 
          />
        ))}
      </div>
    );
  }
  

export default Products;
