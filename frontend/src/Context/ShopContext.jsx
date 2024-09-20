import { createContext, useState } from "react";
import all_products from "../assets/all_products";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Create the context
export const ShopContext = createContext(null);

// Function to initialize the cart
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_products.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Add an item to the cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    toast.info("Product Added to the Cart Successfully")
    console.log(cartItems);
  };

  // Remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    toast.warning("Product Removed from the Cart Successfully")

  };

  // Get total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  // Get total number of items in the cart
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  // Context value
  const contextValue = {
    getTotalCartAmount,
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartItems, // Make sure this is included
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

// Export the provider as default
export default ShopContextProvider;
