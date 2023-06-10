import React from 'react';

const TotalOrders = ({ orders }) => {
  const totalOrders = orders.length;

  return (
    <div className="total-orders-title">
      <h2>Total Orders</h2>
      <p>{totalOrders}</p>
    </div>
  );
};

export default TotalOrders;
