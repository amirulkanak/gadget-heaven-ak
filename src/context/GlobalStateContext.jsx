import axios from 'axios';
import { useEffect, useState, createContext } from 'react';

// Create global Context
export const GlobalStateContext = createContext();

// Export the global Context Provider
const GlobalStateProvider = ({ children }) => {
  // All Products data
  const [allProducts, setAllProducts] = useState([]);

  // Products by category
  const [categoryProducts, setCategoryProducts] = useState([]);

  // Product data fetch with axios
  const fetchData = async () => {
    try {
      const response = await axios.get('gadgetData.json');
      setAllProducts(response.data);
      setCategoryProducts(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <GlobalStateContext.Provider
      value={{
        allProducts,
        setAllProducts,
        categoryProducts,
        setCategoryProducts,
      }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
