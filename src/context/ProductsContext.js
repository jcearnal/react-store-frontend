// Importing necessary hooks from React for context and state management
import React, { createContext, useContext, useState, useEffect } from 'react';

// Creating a new context for products
const ProductsContext = createContext();

// Custom hook to use the ProductsContext, simplifying access to the context in components
export const useProducts = () => useContext(ProductsContext);

// Provider component for ProductsContext to encapsulate state logic and provide it to children components
export const ProductsProvider = ({ children }) => {
  // State to store the list of products
  const [products, setProducts] = useState([]);

  // Effect hook to simulate loading products from an external source, like an API or database
  useEffect(() => {
    // Simulated fetch function to load products data
    const loadProducts = async () => {
      // Hardcoded list of products for demonstration purposes
      const productsData = [
        {
          id: 1,
          name: 'Assault Treadmill',
          price: 2000,
          image: process.env.PUBLIC_URL + '/images/treadmill.jpg', // Using PUBLIC_URL to access images in the public folder
        },
        {
          id: 2,
          name: 'Squat Rack',
          price: 950,
          image: process.env.PUBLIC_URL + '/images/squatrack.jpg',
        },
        {
          id: 3,
          name: '10kg Dumbbell Set',
          price: 120,
          image: process.env.PUBLIC_URL + '/images/dumbbell.jpg',
        },
        {
          id: 4,
          name: 'Exercise Bike',
          price: 1250,
          image: process.env.PUBLIC_URL + '/images/exercisebike.jpg',
        },
        // More products could be added here
      ];

      // Setting the loaded products into state
      setProducts(productsData);
    };

    // Calling the load function on component mount
    loadProducts();
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  // Providing the products state and setter function through the context to be used by child components
  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
