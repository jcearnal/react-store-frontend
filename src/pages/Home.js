import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductsContext'; 

function Home() {
  const { products } = useProducts(); 
  const featuredProduct = products.find(product => product.id === 1); 

  return (
    <div className="home">
      <header>
      <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`} alt="XTREME Fitness Logo" className="logo" />
        <h1>Welcome to the Extreme Fitness Store</h1>
        <p>Find the perfect equipment for your home gym at the worst prices!</p>
      </header>
      
      <section className="featured-products">
        <h2>Featured Product</h2>
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

export default Home;
