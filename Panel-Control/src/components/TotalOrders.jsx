import React from 'react';

const TotalOrders = ({ orders }) => {
  const totalOrders = orders.length;

  return (
    <div>
      <h2>Total de pedidos realizados</h2>
      <p>{totalOrders}</p>
    </div>
  );
};

export default TotalOrders;
