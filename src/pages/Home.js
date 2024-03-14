// Import React and necessary hooks for navigation and context
import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductsContext'; // To access the global state of products

function Home() {
  // Accessing products from the global context
  const { products } = useProducts(); 
  // Selecting the first product as a featured product for demonstration
  const featuredProduct = products.find(product => product.id === 1); 

  // The component renders the home page of the app
  return (
    <div className="home">      
      <header>
        <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`} alt="XTREME Fitness Logo" className="logo" />        
        <h1>Welcome to the XTREME Fitness Store</h1>       
        <p>Find the perfect equipment for your home gym at the best prices!</p>
      </header>
      
      {/* Section for featuring a selected product */}
      <section className="featured-products">
        <h2>Featured Product</h2>
        {/* Conditionally renders the featured product if it's found */}
        {featuredProduct && (
          <div className="product">
            <img src={featuredProduct.image} alt={featuredProduct.name} style={{ width: '100%', height: 'auto', maxWidth: '200px'}} />            
            <h3>{featuredProduct.name}</h3>            
            <p>${featuredProduct.price}</p>            
            <Link to={`/product/${featuredProduct.id}`}>View Product</Link>
          </div>
        )}
        <div className="view-more">
          <Link to="/search">View All Products</Link>
        </div>
      </section>
    </div>
  );
}

export default Home; // Exporting Home component for use in the app
