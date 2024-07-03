import React from 'react';

const TotalInfo = ({ totals }) => (
  <div>
    <h2>Total de Información</h2>
    <p>Total de Productos: {totals.products.length}</p>
    <p>Total de Usuarios: {totals.users.length}</p>
    <p>Total de Categorías: {totals.categories.length}</p>
  </div>
);

export default TotalInfo;