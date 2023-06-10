import React from 'react';

const AveragePrice = ({ products }) => {
  const totalProducts = products.length;
  const totalPrices = products.reduce((acc, product) => acc + product.price, 0);
  const averagePrice = (totalPrices / totalProducts).toFixed(2);

  return (
    <div>
      <h2>Average Price</h2>
      <p>${averagePrice}</p>
    </div>
  );
};

export default AveragePrice;
