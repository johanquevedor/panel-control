import React, { useContext } from 'react';
import { FavoritesContext } from '../components/FavoritesContext';
import { Link } from 'react-router-dom';
import favoritesicon from '../assets/favoritesicon.png';
import FloatingButton from '../components/FloatingButton';

const FavoritesPage = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);

  const handleRemoveFavorite = (id) => {
    removeFromFavorites(id);
  };

  return (
    <div className="FavoritesPageContainer">
      <div className="favoritesicon">
      <img src={favoritesicon} className="favoritesicon" alt="favoritesicon"></img>
      </div>
      
      {favorites.length === 0 ? (
       <div className="FavoritesNoFavorites"> <p>No favorites added yet.</p></div>
      ) : (
<div className="favoritescard">
        <ul className="favorites-list">
          {favorites.map((favorite) => (
            <li key={favorite.id} className="favorite-item">
              <h3 className="favorite-name">{favorite.name}</h3>
              <Link to="/brands">
              <img src={favorite.photo} alt={favorite.name} className="favorite-image"/>
              </Link>
              <p className="favorite-price">Price: {favorite.price}</p>
              <p className="favorite-storage">Storage: {favorite.storage}</p>
              <p className="favorite-screenSize">Screen Size: {favorite.screenSize}</p>
              <button onClick={() => handleRemoveFavorite(favorite.id)} className="remove-button">Remove</button>
            </li>
          ))}
        </ul>
        </div>
      )}

<FloatingButton />
    </div>
  );
};

export default FavoritesPage;
