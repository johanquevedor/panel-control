import React from 'react';

const TotalProducts = ({ products }) => {
  const totalProducts = products.length;

  return (
    <div>
      <h2>Total Products</h2>
      <p>{totalProducts}</p>
    </div>
  );
};

export default TotalProducts;
