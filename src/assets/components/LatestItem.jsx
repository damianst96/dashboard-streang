import React from 'react';

const LatestItem = ({ item, title }) => (
  <div>
    <h2>{title}</h2>
    <p>Nombre: {item.name}</p>
    <p>Descripción: {item.description}</p>
    <p>Categoría: {item.category}</p>
    <p>Precio: {item.price}</p>
    {/* Agrega más detalles según la estructura del objeto item */}
  </div>
);

export default LatestItem;
