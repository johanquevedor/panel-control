import React from 'react'
import iphonedis from '../assets/iphonedis.mp4';
import samsungdis from '../assets/samsungdis.mp4';
import xiaomidis from '../assets/xiaomidis.mp4';
import decorationhome from '../assets/decorationhome.png';
import logoapplebrands from '../assets/logoapplebrands.png';
import logosamsungbrands from '../assets/logosamsungbrands.png';
import logoxiaomibrands from '../assets/logoxiaomibrands.png';
import { Link } from 'react-router-dom';
import FloatingButton from '../components/FloatingButton';

function Brands(){
    return(
        <div className="BrandsPage">

<div className="decorationhome">
        <img src={decorationhome} className="d-block w-100 fadein-animation" alt="decorationhome" />
      </div>
<Link to="/brands/apple">
            <div className="brands-card-container">
      <div className="brands.video-overlay">
        <div className="brands-icon">
       
            <img className="logoapplebrands" src={logoapplebrands}></img>
       
        </div>
      </div>
      <video className="brands-video-background" autoPlay muted loop>
        <source src={iphonedis} type="video/mp4" />
      </video>
    </div>
</Link>
<Link to="/brands/samsung">
    <div className="brands-card-container">
      <div className="brands.video-overlay">
        <div className="brands-icon">
            <img className="logosamsungbrands" src={logosamsungbrands}></img>
      
        </div>
      </div>
      <video className="brands-video-background" autoPlay muted loop>
        <source src={samsungdis} type="video/mp4" />
      </video>
    </div>
</Link>
<Link to="/brands/samsung">
    <div className="brands-card-container">
      <div className="brands.video-overlay">
        <div className="brands-icon">
            <img className="logoapplebrands" src={logoxiaomibrands}></img>
        </div>
      </div>
      <video className="brands-video-background" autoPlay muted loop>
        <source src={xiaomidis} type="video/mp4" />
      </video>
    </div>
  </Link>


    <div className="decorationhome">
        <img src={decorationhome} className="d-block w-100 fadein-animation" alt="decorationhome" />
      </div>

      <FloatingButton />
        </div>
    )
}
export default Brands;