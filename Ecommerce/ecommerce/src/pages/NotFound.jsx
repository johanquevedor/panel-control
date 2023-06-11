import React from 'react'
import notfound from '../assets/404.png';
import { Link } from 'react-router-dom';

function NotFound(){

    return(
        <div className="notfoundpage">

           <div className="notfoundicon">
          <img src={notfound} className="notfoundicon" alt="404" />
        </div>

<div className="notfoundcardcontainer">
<div class="notfound-card">
  <div class="notfound-card-content">
    <p class="notfound-left-text">Is everything OK?</p>
<Link to="/">
    <button class="notfound-right-button">Go Back</button>
</Link>
  </div>
</div>

<div class="notfound-card">
  <div class="notfound-card-content">
    <p class="notfound-left-text">Need Help?</p>
<Link to="/contact">
    <button class="notfound-right-button">Contact Us</button>
</Link>
  </div>
</div>
</div>


        </div>
    )
}
export default NotFound;