import { useEffect, useState, createContext } from 'react';

// Create global Context
export const GlobalStateContext = createContext();

// Export the global Context Provider
const GlobalStateProvider = ({ children }) => {
  // All Products data
  const [allProducts, setAllProducts] = useState([]);
  // Products by category
  const [categoryProducts, setCategoryProducts] = useState([]);
  // Cart data state
  const [cart, setCart] = useState([]);
  // wishlist data state
  const [wishlist, setWishlist] = useState([]);
  // Total price of products in cart
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch data before component loads
  useEffect(() => {
    fetch('/gadgetData.json')
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
        setCategoryProducts(data);
      });
  }, []);

  return (
    <GlobalStateContext.Provider
      value={{
        allProducts,
        setAllProducts,
        categoryProducts,
        setCategoryProducts,
        cart,
        setCart,
        wishlist,
        setWishlist,
        totalPrice,
        setTotalPrice,
      }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
