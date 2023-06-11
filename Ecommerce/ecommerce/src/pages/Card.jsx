import React, { useContext } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FavoritesContext } from '../components/FavoritesContext';
import { CartContext } from '../components/CartContext';

const Card = ({ id, name, photo, photo2, photo3, price, storage, screenSize }) => {
  const { favorites, addToFavorites, isFavorite } = useContext(FavoritesContext);
  const { addToCart } = useContext(CartContext);

  const handleFavoriteClick = () => {
    const isFavoriteProduct = isFavorite(id);
    if (!isFavoriteProduct) {
      addToFavorites({ id, name, photo, photo2, photo3, price, storage, screenSize });
    }
  };

  const handleAddToCart = () => {
    addToCart({ id, name, photo, photo2, photo3, price, storage, screenSize });
  };

  return (
    <div className="cardjson">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <Carousel className="custom-carousel"showArrows={true} showThumbs={false}>
              <div>
                <img src={photo} className="img-fluid rounded-start" alt="Product 1" />
              </div>
              <div>
                <img src={photo2} className="img-fluid rounded-start" alt="Product 2" />
              </div>
              <div>
                <img src={photo3} className="img-fluid rounded-start" alt="Product 3" />
              </div>
            </Carousel>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <h6 className="card-text-price">Price: {price}</h6>
              <p className="card-text">Storage: {storage}</p>
              <p className="card-text-size">Screen Size: {screenSize}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 d-flex justify-content-end">
            <button className={`btn ${isFavorite(id) ? 'btn-danger' : 'btn-outline-danger'}`} onClick={handleFavoriteClick}>
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button className="btn btn-primary ms-2" onClick={handleAddToCart}>
              <FontAwesomeIcon icon={faShoppingCart} /> Add to Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
/*
import React, { useContext } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FavoritesContext } from '../components/FavoritesContext';
import { CartContext } from '../components/CartContext';

const Card = ({ id, name, photos, price, storage, screenSize }) => {
  const { favorites, addToFavorites, isFavorite } = useContext(FavoritesContext);
  const { addToCart } = useContext(CartContext);

  const handleFavoriteClick = () => {
    const isFavoriteProduct = isFavorite(id);
    if (!isFavoriteProduct) {
      addToFavorites({ id, name, photos, price, storage, screenSize });
    }
  };

  const handleAddToCart = () => {
    addToCart({ id, name, photos, price, storage, screenSize });
  };

  return (
    <div className="cardjson">
      <div className="card mb-3" style={{ maxWidth: '540px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <Carousel showArrows={photos.length > 1} showThumbs={false}>
              {photos.map((photo, index) => (
                <div key={index}>
                  <img src={photo} className="img-fluid rounded-start" alt={`Product ${index + 1}`} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">Price: {price}</p>
              <p className="card-text">Storage: {storage}</p>
              <p className="card-text">Screen Size: {screenSize}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 d-flex justify-content-end">
            <button className={`btn ${isFavorite(id) ? 'btn-danger' : 'btn-outline-danger'}`} onClick={handleFavoriteClick}>
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button className="btn btn-primary ms-2" onClick={handleAddToCart}>
              <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card; 
*/