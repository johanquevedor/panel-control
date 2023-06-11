import React, { useState, useEffect } from 'react';
import data from '../data/data.json';
import salesimage from '../assets/sales.png';
import FloatingButton from '../components/FloatingButton';
import { Link } from 'react-router-dom';



const SalesForm = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [sales, setSales] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    setProducts(data.products);
  }, []);

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const productId = parseInt(selectedProduct);
    const saleQuantity = parseInt(quantity);

    if (!productId || !saleQuantity) {
      alert('Please select a product and a valid quantity.');
      return;
    }

    const product = products.find((p) => p.id === productId);

    if (!product) {
      alert('Product not found.');
      return;
    }

    const total = product.price * saleQuantity;
    const saleId = Math.floor(Math.random() * 1000000) + 1;

    const newSale = {
      id: saleId,
      productId: productId,
      quantity: saleQuantity,
      total: total,
    };


    setSales([...sales, newSale]);

  
    const updatedData = {
      ...data,
      orders: [...data.orders, newSale],
    };


    updateJSONFile(updatedData);

   
    setSuccessMessage('Sale added correctly.');

  
    setSelectedProduct('');
    setQuantity('');
  };

  // Simulación de actualización del archivo JSON 
  const updateJSONFile = (updatedData) => {
    console.log(updatedData);
  };

  const handleSuccessClose = () => {
    setSuccessMessage('');
  };

  return (

<div>

    <form onSubmit={handleSubmit} className="sales-form">

    <img src={salesimage} alt="sales" className="salesimage"/>
      <label>
        Product:
        <select value={selectedProduct} onChange={handleProductChange}>
          <option value="">Select a product</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={handleQuantityChange} />
      </label>
      <br />
      <button type="submit">Add Sale</button>
      {successMessage && (
        <div>
          <p>{successMessage}</p>
          <button onClick={handleSuccessClose}>OK</button>
        </div>
      )}
      <h2>Sales made</h2>
      <ul>
        {sales.map((sale) => (
          <li key={sale.id}>
            Product: {products.find((p) => p.id === sale.productId)?.name}, Quantity: {sale.quantity}, Total: ${sale.total}
          </li>
        ))}
      </ul>
    </form>

    <div className="button-goback">
<Link to="/">
<button className="button-goback">Go Back</button>
</Link>
</div>



    <FloatingButton />
    </div>

  );
};

export default SalesForm;
