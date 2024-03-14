// Importing necessary hooks for component functionality and to work with the application's routing and context systems
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // For accessing URL parameters to identify which product to display
import { useCart } from '../context/CartContext'; // Accessing the cart context to enable adding items to the cart
import { useProducts } from '../context/ProductsContext'; // To retrieve product data from the global state

function ProductDetail() {
  // Retrieves product ID from URL
  const { id } = useParams();
  // Pulls addToCart function from CartContext to allow adding products to the user's cart
  const { addToCart } = useCart();
  // Accesses the complete product list from ProductsContext
  const { products } = useProducts();
  // Local state to hold the details of the current product being viewed
  const [product, setProduct] = useState(null);

  // useEffect hook to find and set the current product's details based on the product ID
  useEffect(() => {
    const productDetail = products.find(product => product.id.toString() === id);
    setProduct(productDetail);
  }, [id, products]); // This effect depends on the ID from the URL and the products list

  // Displays a loading message if the product's details haven't been retrieved yet
  if (!product) {
    return <div>Loading...</div>;
  }

  // Renders the product's details, including an image, name, and price. Also provides an "Add to Cart" button.
  // Description holds a default message indicating the possibility of more detailed product information, which wasn't a requirement for this project.
  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} style={{ maxHeight: '300px', width: 'auto', marginTop: '20px' }} />
      <h2>{product.name}</h2>
      {/* Providing a placeholder for the description; more detailed product descriptions could be implemented in future development */}
      <p>{product.description ? product.description : "A detailed product description could be provided here, but wasn't required for this project."}</p>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductDetail; // Making the component available for import in other parts of the application
