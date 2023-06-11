import React, { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [favoritesCount, setFavoritesCount] = useState(0);

  useEffect(() => {
    setFavoritesCount(favorites.length);
  }, [favorites]);

  const addToFavorites = (product) => {
    setFavorites((prevFavorites) => [...prevFavorites, product]);
  };

  const removeFromFavorites = (productId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((product) => product.id !== productId));
  };

  const isFavorite = (productId) => {
    return favorites.some((product) => product.id === productId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, favoritesCount, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
