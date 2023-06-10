import React from 'react';

const Popup = ({ onClose, data }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Detalles</h2>
        <p>ID: {data.id}</p>
        <p>Nombre: {data.name}</p>
        <p>Precio: {data.price}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Popup;
