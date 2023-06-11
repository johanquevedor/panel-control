import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    setCartCount((prevCount) => prevCount + 1);
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) => prevItems.filter((prevItem) => prevItem.id !== item.id));
    setCartCount((prevCount) => prevCount - 1);
  };

  const clearCart = () => {
    setCartItems([]);
    setCartCount(0);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, cartCount, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};