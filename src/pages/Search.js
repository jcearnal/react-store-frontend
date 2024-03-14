// Start by importing necessary React features and context hooks
import React, { useState } from 'react';
import { useProducts } from '../context/ProductsContext';
import { useCart } from '../context/CartContext'; 
import Product from '../components/Product'; // Import the Product component for displaying each search result

function Search() {
  // Using useState to handle the search query input by the user
  const [query, setQuery] = useState('');
  // Access the list of all products and the function to add items to the cart from their respective contexts
  const { products } = useProducts();
  const { addToCart } = useCart(); 

  // Filter products based on user's search query. If there's no query, show all products
  const filteredResults = query ? products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  ) : products;

  return (
    <div>
      {/* Input field for the search query */}
      <input
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update the query state as the user types
      />
      <div>
        {/* Display the filtered products. If there are no matches, show a message saying so */}
        {filteredResults.length > 0 ? (
          filteredResults.map(product => (
            // Render a Product component for each filtered result
            <Product 
              key={product.id} 
              {...product} // Pass all product details as props to the Product component
              onAddToCart={() => addToCart(product)} // When the 'Add to Cart' button is clicked, add this product to the cart
            />
          ))
        ) : (
          // Message displayed when there are no search results matching the query
          <p>No results found for "{query}".</p>
        )}
      </div>
    </div>
  );
}

export default Search; // Make the Search component available for use in other parts of the app
