import React from 'react'
import imagena from '../assets/imagena.png';
import imagenb from '../assets/imagenb.png';
import imagenc from '../assets/imagenc.png';
import samsung from '../assets/samsung.png';
import { Link } from 'react-router-dom';
import video from '../assets/xiaomivideo.mp4';
import decorationhome from '../assets/decorationhome.png';
import iphonedis from '../assets/iphonedis.mp4';
import samsungdis from '../assets/samsungdis.mp4';
import xiaomidis from '../assets/xiaomidis.mp4';
import fastdelivery from '../assets/fastdelivery.png';
import securepayment from '../assets/securepayment.png';
import bestprice from '../assets/bestprice.png';
import homecard1 from '../assets/homecard1.png';
import homecard2 from '../assets/homecard2.png';
import homecard3 from '../assets/homecard3.png';
import homecard4 from '../assets/homecard4.png';
import homecard5 from '../assets/homecard5.png';
import homecard6 from '../assets/homecard6.png';
import FloatingButton from '../components/FloatingButton';


function Home (){
  

  return[

   
   

<div className="decorationhome">

    <img src={decorationhome} className="d-block w-100 fadein-animation" alt="decorationhome" />


        <div className="imagen-inicio">
            <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item fadein active">
    <Link to="/brands/apple">
      <img src={imagena} className="d-block w-100" alt="imagena"></img>
      </Link>
      <div className="carousel-caption">
        <h5>IPhone 14 Pro</h5>
        <p>Pro. Beyond. In your favorite place, us.</p>
      </div>
    </div>
    <div className="carousel-item fadein">
    <Link to="/brands/apple">
      <img src={imagenb} className="d-block w-100" alt="imagenb"></img>
      </Link>
      <div className="carousel-caption d-none d-md-block">
        <h5>Dynamic Island</h5>
        <p>Bubbles up music, sports scores, phone calls, and so much more.</p>
      </div>
    </div>
    <div className="carousel-item fadein">
    <Link to="/brands/apple">
      <img src={imagenc} className="d-block w-100" alt="imagenc"></img>
      </Link>
      <div className="carousel-caption">
        <h5>Get 20% off</h5>
        <p>Code: PhoneCave</p>
        <p>It's not for a lifetime, come on!</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        <div className="imagen-samsung">
  <Link to="/brands/samsung">
    <img src={samsung} className="d-block w-100" alt="samsung" />
  </Link>
</div>


      <div className="video-container">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlay">
          <h2 id='xiaomi13pro'> Xiaomi 13 Pro</h2>
          <h2>A masterpiece!</h2>
          <Link to="/brands/xiaomi">Find out!</Link>
        </div>
        </div>


        <div className="decorationhome">
    <img src={decorationhome} className="d-block w-100 fadein-animation" alt="decorationhome" /> </div>



        <div className="custom-section">
  <h2>Best of the week</h2>
  <div className="card-container">
    <div className="card">
    <Link to="/brands/apple">
      <img src={homecard1} alt="Card 1" />
      </Link>
      <h3>Iphone 14 Pro Max</h3>
      <p>Discover this and other models that we know you will like, click here:</p>
      
      <Link to="/brands/apple">
      <button>I want it!</button>
      </Link>

    </div>
    <div className="card">
    <Link to="/brands/samsung">
      <img src={homecard2} alt="Card 2" />
      </Link>
      <h3>Galaxy S23 Ultra</h3>
      <p>Discover this and other models that we know you will like, click here:</p>
      
      <Link to="/brands/samsung">
      <button>I want it!</button>
      </Link>
      
    </div>
    <div className="card">
    <Link to="/brands/xiaomi">
      <img src={homecard3} alt="Card 3" />
      </Link>
      <h3>Xiaomi 13 Pro</h3>
      <p>Discover this and other models that we know you will like, click here:</p>

      <Link to="/brands/xiaomi">
      <button>I want it!</button>
      </Link>

    </div>
  </div>
</div>


<div className="custom-section">
  <div className="my-card-container">
    <div className="card">
    <Link to="/brands/apple">
      <img src={homecard4} alt="Card 1" />
      </Link>
      <h3>Iphone 14</h3>
      <p>Discover this and other models that we know you will like, click here:</p>
      <Link to="/brands/apple">
      <button>I want it!</button>
      </Link>
    </div>
    <div className="card">
    <Link to="/brands/samsung">
      <img src={homecard5} alt="Card 2" />
      </Link>
      <h3>Galaxy S23</h3>
      <p>Discover this and other models that we know you will like, click here:</p>
      <Link to="/brands/samsung">
      <button>I want it!</button>
      </Link>
    </div>
    <div className="card">
    <Link to="/brands/xiaomi">
      <img src={homecard6} alt="Card 3" />
      </Link>
      <h3>Xiaomi 13</h3>
      <p>Discover this and other models that we know you will like, click here:</p>
      <Link to="/brands/xiaomi">
      <button>I want it!</button>
      </Link>
    </div>
  </div>
</div>

<div className="decorationhome">
    <img src={decorationhome} className="d-block w-100 fadein-animation" alt="decorationhome" /> </div>



<div className="discount-title">
  <h3 id='discount-title-text'>It'not for a life time.</h3>
</div>
        
<div className="card-video-container">

        <div className="card" style={{ border: 'none', borderRadius: '25px' }}>
          <video className="card-video" autoPlay loop muted>
            <source src={iphonedis} type="video/mp4" />
          </video>
          <div className="card-content">
            <h2>Iphone 14</h2>
            <p>Get 20% off on all iPhone 14 models.</p>
            <Link to="/brands/apple">
            <button className="add-to-cart">Discover more</button>
            </Link>
          </div>
        </div>
        <div className="card" style={{ border: 'none', borderRadius: '25px' }}>
          <video className="card-video" autoPlay loop muted>
            <source src={samsungdis} type="video/mp4" />
          </video>
          <div className="card-content">
            <h2>Galaxy S23</h2>
            <p>Get 20% off on all Galaxy S23 models.</p>
            <Link to="/brands/samsung">
            <button className="add-to-cart">Discover more</button>
            </Link>
          </div>
        </div>
        <div className="card" style={{ border: 'none', borderRadius: '25px'}}>
          <video className="card-video" autoPlay loop muted>
            <source src={xiaomidis} type="video/mp4" />
          </video>
          <div className="card-content">
            <h2>Xiaomi 13</h2>
            <p>Get 20% off on all Xiaomi 13 models.</p>
            <Link to="/brands/xiaomi">
            <button className="add-to-cart">Discover more</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="discount-title-s">
  <h3 id='discount-title-text-s'>It'not for a life time.</h3>
</div>


<div class="feature-container">
  <div class="feature-item">
  <img src={fastdelivery} alt="fastdelivery" />
    <h1>Fast Delivery</h1>
    <p>Only in PhoneCave.</p>
  </div>
  <div class="feature-item">
  <img src={securepayment} alt="securepayment" />
    <h1>Secure Payment</h1>
    <p>Only in PhoneCave.</p>
  </div>
  <div class="feature-item">
  <img src={bestprice} alt="bestprice" />
    <h1>Best Price Guarantee</h1>
    <p>Only in PhoneCave.</p>
  </div>
</div>


<div className="subscribe-bar">
      <p className="subscribe-text">Subscribe to our newsletter</p>
      <div className="subscribe-input">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>

    <div className="decorationhome">
    <img src={decorationhome} className="d-block w-100 fadein-animation" alt="decorationhome" /> </div>



    <FloatingButton />

        </div>
</div>


    ]
}



export default Home;

