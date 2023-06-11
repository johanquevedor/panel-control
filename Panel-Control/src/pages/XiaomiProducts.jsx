import React from 'react';
import data from '../data/data.json';
import { Link } from 'react-router-dom';
import xiaomiphones from '../assets/xiaomiphones.png'

const XiaomiProducts = () => {
  const xiaomiProducts = data.products.filter((product) => product.name.includes('Xiaomi'));

  return (
    <div className="xiaomipage">
      <h2>Xiaomi Products</h2>
      {xiaomiProducts.map((product) => (
        <div key={product.id} className="card">
          <img src={xiaomiphones} alt={product.name} />
          <div className="card-info">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
          </div>
        </div>
      )
      )
      }

<div className="button-goback">
<Link to="/">
<button>Go Back</button>
</Link>
</div>
    </div>
  );
};

export default XiaomiProducts;
