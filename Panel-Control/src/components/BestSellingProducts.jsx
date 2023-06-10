import React from 'react';

const BestSellingProducts = ({ products, orders }) => {
  const getProductOrdersCount = (productId) => {
    return orders.filter((order) => order.productId === productId).length;
  };

  const sortedProducts = products.sort(
    (a, b) => getProductOrdersCount(b.id) - getProductOrdersCount(a.id)
  );

  return (
    <div>
      <h2>Productos más vendidos</h2>
      <ul>
        {sortedProducts.map((product) => (
          <li key={product.id}>
            {product.name} - Vendidos: {getProductOrdersCount(product.id)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestSellingProducts;
