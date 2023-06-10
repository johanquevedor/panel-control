import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import TotalProducts from './TotalProducts';
import TotalOrders from './TotalOrders';
import TotalRevenue from './TotalRevenue';
import AveragePrice from './AveragePrice';
import BestSellingProducts from './BestSellingProducts';


const Dashboard = () => {
  const [data, setData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetch('src/data/data.json')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const openPopup = (item) => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    history.push('/login');
  };

  return (
    <div className="dashboard-page">
      <h1>Panel de Control</h1>
      {isLoggedIn ? (
        <button className="logout-button" onClick={handleLogout}>
          Log Out
        </button>
      ) : (
        <button className="login-button" onClick={() => history.push('/login')}>
          Login
        </button>
      )}
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
      {selectedItem && <Popup onClose={closePopup} data={selectedItem} />}
    </div>
  );
};

export default Dashboard;
