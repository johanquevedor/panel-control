import React from 'react';
import Card from './Card';
import decorationhome from '../assets/decorationhome.png';
import data from '../data/data.json';
import xiaomibannera from '../assets/xiaomibannera.png';
import xiaomibannerb from '../assets/xiaomibannerb.png';
import xiaomibannerc from '../assets/xiaomibannerc.png';
import FloatingButton from '../components/FloatingButton';

const XiaomiPage = () => {
  const samsungModels = data.brands.find((brand) => brand.name === 'Xiaomi').models;

  return (
    <div className="XiaomiPageContainer">

      <div className="decorationhome">
        <img src={decorationhome} className="d-block w-100 fadein-animation" alt="decorationhome" />
      </div>


  <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={xiaomibannera} className="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
       
      </div>
    </div>
    <div className="carousel-item">
      <img src={xiaomibannerb} className="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div className="carousel-item">
      <img src={xiaomibannerc} className="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
        
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


      {samsungModels.map((model) => (
        <Card
          key={model.id}
          id={model.id}
          name={model.name}
          photo={model.photo}
          photo2={model.photo2}
          photo3={model.photo3}
          price={model.price}
          storage={model.storage}
          screenSize={model.screenSize}
        />
      ))}

<FloatingButton />
    </div>
  );
};

export default XiaomiPage;