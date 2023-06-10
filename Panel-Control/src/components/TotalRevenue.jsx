import React from 'react';

const TotalRevenue = ({ orders }) => {
  const totalRevenue = orders.reduce((acc, order) => acc + order.total, 0).toFixed(2);

  return (
    <div>
      <h2>Total Revenue</h2>
      <p>${totalRevenue}</p>
    </div>
  );
};

export default TotalRevenue;
