// Importing React and necessary hooks for accessing context values
import React from 'react';
import { useProducts } from '../context/ProductsContext'; // To get access to the global list of products
import { useCart } from '../context/CartContext'; // To use the cart functionality, like adding items to the cart
import Product from './Product'; // Importing the single Product component to display each product

// Component for displaying all products
function Products() {
  // Destructuring to get the list of products from ProductsContext
  const { products } = useProducts();
  // Destructuring to get the addToCart function from CartContext to enable adding products to the cart
  const { addToCart } = useCart(); 

  // Rendering the list of products. For each product in the products array, a Product component is rendered.
  return (
    <div className="products">
      {products.map(product => (
        // Rendering the Product component for each product and passing necessary props
        // including function to handle adding the product to the cart
        <Product
          key={product.id} 
          name={product.name} 
          image={product.image} 
          price={product.price} 
          onAddToCart={() => addToCart(product)} // Function passed as a prop for adding the product to the cart
        />
      ))}
    </div>
  );
}

export default Products; // Exporting the Products component for use in other parts of the app
