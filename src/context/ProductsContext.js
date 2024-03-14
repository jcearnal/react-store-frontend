import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const productsData = [
        {
          id: 1,
          name: 'Assault Treadmill',
          price: 2000,
          image: process.env.PUBLIC_URL + '/images/treadmill.jpg',
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
        // Add more products as necessary
      ];

      setProducts(productsData);
    };

    loadProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
