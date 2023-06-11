import React, { useState, useEffect, useContext} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/PhoneCaveLogo.svg';
import logocart from '../assets/logocart.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { CartContext }  from '../components/CartContext';



const NavBar = () => {


  const { cartCount } = useContext(CartContext);
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');


  useEffect(() => {
    // Verificar si el usuario ha iniciado sesión
    const storedData = JSON.parse(localStorage.getItem('data')) || [];
    setIsLoggedIn(storedData.length > 0);
    
   // Obtener el nombre de usuario almacenado
    if (storedData.length > 0) {
      const user = storedData[0];
      setUserName(user.name);

    }
  }, []);

  return (

    <nav className="navbar navbar-expand-lg mynavbar">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <NavLink exact="true" to="/" activeclassname="active">
                <img className="navbar-brand" src={logo} alt="Logo" />
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link nav-title" exact="true" to="/">
                <button className="nav-title">Home</button>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-title" to="/brands">
                <button className="nav-title">Brands</button>
              </NavLink>
              <div className="submenu-wrapper">
                <ul className="submenu">
                  <li>
                    <NavLink className="nav-link" to="/brands/apple">
                      Apple
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/brands/samsung">
                      Samsung
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/brands/xiaomi">
                      Xiaomi
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
             
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-title" to="/compare">
                <button className="nav-title">Compare</button>
              </NavLink>
            </li>
            {isLoggedIn ? (
              <li className="nav-item">
                <NavLink className="nav-link nav-title" to="/myaccount">
                  <button className="nav-title">{userName}</button>
                </NavLink>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink className="nav-link nav-title" to="/login">
                  <button className="nav-title">Login</button>
                </NavLink>
              </li>
            )}
          

          <NavLink to="/favorites" className="Navbar-link">
          <FontAwesomeIcon icon={faHeart} className="heart-icon-navbar" />
      </NavLink>

          <NavLink exact="true" to="/cartpage" activeclassname="active">
                <img className="navbar-logocart" src={logocart} alt="Logo" />
              </NavLink>
           
              <NavLink className="Navbar-link">
              <div className="favorite-icon">
              <span className="favorite-count">{cartCount}</span> 
              </div>
              </NavLink>
        
      
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default NavBar;
