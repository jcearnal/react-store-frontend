import React, { useState } from 'react';
import { useProducts } from '../context/ProductsContext';
import { useCart } from '../context/CartContext'; 
import Product from '../components/Product';

function Search() {
  const [query, setQuery] = useState('');
  const { products } = useProducts();
  const { addToCart } = useCart(); 

  const filteredResults = query ? products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  ) : products;

  return (
    <div>
      <input
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        {filteredResults.length > 0 ? (
          filteredResults.map(product => (
            <Product 
              key={product.id}
              {...product}
              onAddToCart={() => addToCart(product)} 
            />
          ))
        ) : (
          <p>No results found for "{query}".</p>
        )}
      </div>
    </div>
  );
}

export default Search;
