import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FavoritesContext } from '../components/FavoritesContext';
import { Link } from 'react-router-dom';
import decorationhome from '../assets/decorationhome.png';
import yourbag from '../assets/yourbag.png';
import FloatingButton from '../components/FloatingButton';

const CartPage = () => {

  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const { addToFavorites, isFavorite } = useContext(FavoritesContext);

  const handleRemoveFromCart = (item) => {
    const { id, quantity } = item;
    if (quantity > 1) {
      removeFromCart({ ...item, quantity: quantity - 1 });
    } else {
      removeFromCart(item);
    }
  };

  const handleClearCart = () => {
    clearCart();
  };

  const groupedItems = cartItems.reduce((acc, item) => {
    const { id, name, photo, photo2, photo3, price, storage, screenSize } = item;
    if (!acc[id]) {
      acc[id] = { ...item, quantity: 1 };
    } else {
      acc[id].quantity += 1;
    }
    return acc;
  }, {});

  function completeOrder() {
    alert("Your order has been completed!");
  }
  

  return (

    

    <div className="cart-page">
     
     <div className="decorationhome">
    <img src={decorationhome} className="d-block w-100 fadein-animation" alt="decorationhome" /> </div>


 

      <div className="yourbagicon">
      <img src={yourbag} className="yourbagicon" alt="yourbagicon"></img>
      </div>

      {cartItems?.length === 0 ? (
        <>
          <h3>Not much activity around here</h3>
          <p>Discover some amazing products</p>
          <Link to="/">
          <button className="letsgo"> Let's go!</button>
          </Link>
        </>
      ) : (
        <>
          <div className="card-container-cart">
            {Object.values(groupedItems).map((item) => {
              const { id, name, photo, photo2, photo3, price, quantity, storage, screenSize } = item;
              const isItemFavorite = isFavorite(id);

              const handleFavoriteClick = () => {
                if (!isItemFavorite) {
                  addToFavorites({ id, name, photo, photo2, photo3, price, storage, screenSize });
                }
              };

              const totalPrice = price * quantity;

              return (
                <div className="card-cart" key={id}>
                  <div className="card-body-cart">
                    <h5 className="card-title">{name}</h5>
                    <Carousel showArrows={photo2 && photo3} showThumbs={false}>
                      <div>
                        <img src={photo} className="img-fluid rounded-start" alt="Product 1" />
                      </div>
                      {photo2 && (
                        <div>
                          <img src={photo2} className="img-fluid rounded-start" alt="Product 2" />
                        </div>
                      )}
                      {photo3 && (
                        <div>
                          <img src={photo3} className="img-fluid rounded-start" alt="Product 3" />
                        </div>
                      )}
                    </Carousel>
                    <p className="card-text-cartprice">Price: {totalPrice}</p>
                <div className="buttons-cart">
                    <button className={`btn ${isItemFavorite ? 'btn-danger' : 'btn-outline-danger'}`} onClick={handleFavoriteClick}>
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                    {quantity > 1 && (
                      <button className='btn btn-danger' onClick={() => handleRemoveFromCart(item)}>
                        Remove
                      </button>
                      
                    )}
                </div>
                    <p>Quantity: {quantity}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="clearcart" onClick={handleClearCart}>Clear Cart</button>
        </>
      )}


<div class="checkout-cart-item">
  <div class="checkout-cart-card">
    <div class="checkout-row">
      <div class="checkout-subtotal">
        <h3 class="checkout-subtotal-label">Subtotal:</h3>
        <p class="v-subtotal-price">$25.99</p>
      </div>
      <div class="checkout-total">
        <h3 class="checkout-total-label">Total:</h3>
        <p class="checkout-total-price">$29.99</p>
      </div>
    </div>
    <div class="checkout-order-button">
      <button class="checkout-order-btn" onClick="completeOrder()">Place Order</button>
    </div>
  </div>
</div>
<FloatingButton />

    </div>





  );
};

export default CartPage;
