import React from 'react';
import data from '../data/data.json';
import { Link } from 'react-router-dom';
import samsungphones from '../assets/samsungphones.png'

const SamsungProducts = () => {
  const samsungProducts = data.products.filter((product) => product.name.includes('Galaxy'));

  return (
    <div className="samsungpage">
      <h2>Samsung Products</h2>
      {samsungProducts.map((product) => (
        <div key={product.id} className="card">
          <img src={samsungphones} alt={product.name} />
          <div className="card-info">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
          </div>
        </div>
      ))}

<div className="button-goback">
<Link to="/">
<button>Go Back</button>
</Link>
</div>


    </div>
  );
};

export default SamsungProducts;
