
import React from 'react'
import {useRoutes, BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import CartPage from './pages/CartPage';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Brands from './pages/Brands'
import Apple from './pages/Apple';
import Samsung from './pages/Samsung';
import Xiaomi from './pages/Xiaomi';
import Category from './pages/Category';
import Performance from './pages/Performance';
import Gaming from './pages/Gaming';
import Photography from './pages/Photography';
import Compare from './pages/Compare';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsofUse from './pages/TermsofUse';
import SalesandRefunds from './pages/SalesandRefunds';
import { AuthProvider } from './AuthContext';
import FavoritesPage from './pages/FavoritesPage';
import { FavoritesProvider } from './components/FavoritesContext';
import { CartProvider } from './components/CartContext';
import Contact from './pages/Contact';




const AppRoutes = () => {


  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/brands', element: <Brands />},
    {path: '/brands/apple', element: <Apple /> },
    {path: '/brands/samsung', element: <Samsung /> },
    {path: '/brands/xiaomi', element: <Xiaomi /> },
    {path: '/category', element: <Category />},
    {path: '/category/performance', element: <Performance /> },
    {path: '/category/gaming', element: <Gaming /> },
    {path: '/category/photography', element: <Photography /> },
    {path: '/compare', element: <Compare />},
    {path: '/myaccount', element: <MyAccount />},
    {path: '/cartpage', element: <CartPage />},
    {path: '/createaccount', element: <CreateAccount />},
    {path: '/login', element: <Login />},
    {path: '/privacypolicy', element: <PrivacyPolicy />},
    {path: '/termsofuse', element: <TermsofUse />},
    {path: '/salesandrefunds', element: <SalesandRefunds />},
    {path: '/favorites', element: <FavoritesPage />},
    {path: '/contact', element: <Contact />},
    {path: '/*', element: <NotFound />}
  ]) 
  return routes
}


function App() {
    
  
  return (

    
    <BrowserRouter>
    
    <FavoritesProvider>
    <CartProvider>
        
     <AuthProvider>
    <div className="MainContainer">
    <NavBar />
    <div className="PagesContainer">
      <AppRoutes />
    
        </div>
        <Footer />
      </div>
      </AuthProvider>
      </CartProvider>
      </FavoritesProvider>
        </BrowserRouter>
        
   


  )
}

export default App