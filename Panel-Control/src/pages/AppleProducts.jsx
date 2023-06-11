import React from 'react';
import data from '../data/data.json';
import { Link } from 'react-router-dom';
import applephones from '../assets/applephones.jfif';

const AppleProducts = () => {
  const appleProducts = data.products.filter((product) => product.name.includes('Iphone'));

  return (
    <div className="applepage">
      <h2>Apple Products</h2>
      {appleProducts.map((product) => (
        <div key={product.id} className="card">
          <img src={applephones} alt={product.name} />
          <div className="card-info">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
          </div>
        </div>
      ))}

<div className="button-goback">
<Link to="/">
<button className="button-goback">Go Back</button>
</Link>
</div>

    </div>
  );
};

export default AppleProducts;
