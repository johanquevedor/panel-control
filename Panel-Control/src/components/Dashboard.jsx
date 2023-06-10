import React, { useEffect, useState } from 'react';
import TotalProducts from './TotalProducts';
import TotalOrders from './TotalOrders';
import TotalRevenue from './TotalRevenue';
import AveragePrice from './AveragePrice';
import BestSellingProducts from './BestSellingProducts';

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('src/data/data.json')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Panel de Control</h1>
      {data ? (
        <div className="card-panel-container">
          <div className="card">
          <TotalProducts products={data.products} />
          </div>  

          <div className="cardorders">
          <TotalOrders orders={data.orders} />
          </div>

          <div className="card">
          <TotalRevenue orders={data.orders} />
          </div>

          <div className="card">
          <AveragePrice products={data.products} />
          </div>

          <div className="card">
          <BestSellingProducts products={data.products} orders={data.orders} />
          </div>

        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Dashboard;
