import React, { useEffect, useState } from 'react';

function Producto() {
  // Estado para almacenar los productos
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    // Realiza la llamada a la API cuando el componente se monta
    fetch('http://localhost:3000/apis/products')
      .then(response => {
        return response.json();
      })
      .then(product => {
        // console.log(product); // Muestra los datos en la consola para depuración
        setProducts(product.data); // Asume que los productos están en data.data
        setLoading(false); // Cambia el estado de carga a falso
      })
      .catch(error => {
        console.error("Error al obtener los productos:", error);
        setError(error.message);
        setLoading(false); // Cambia el estado de carga a falso incluso si hay un error
      });
  }, []); // El array vacío [] asegura que esto solo se ejecute una vez al montar el componente

  return (
    <div>
      <h1>Lista de productos</h1>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {products.length > 0 ? (
          products.map((product, index) => (
            <li key={index}>
              {product.name} - ${product.final_price}
            </li>
          ))
        ) : (
          !loading && <p>No se encontraron productos.</p>
        )}
      </ul>
    </div>
  );
}

export default Producto;