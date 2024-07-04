import React, { useEffect, useState } from 'react';

function LatestProduct() {
  // Estado para almacenar los productos
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores
  let [lastProduct, setLastProduct] = useState([]);

  useEffect(() => {
    // Realiza la llamada a la API cuando el componente se monta
    fetch('http://localhost:3000/apis/products')
      .then(response => {
        return response.json();
      })
      .then(products => {
        // console.log(products); // Muestra los datos en la consola para depuración
        lastProduct = products.data[products.data.length - 1];
        setLastProduct(lastProduct);
        setProducts(products.data); // Asume que los productos están en data.data
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
      <h1>Último producto</h1>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
        <li>
          {lastProduct.name} - ${lastProduct.final_price} - {lastProduct.category}
        </li>
    </div>
  );
}

export default LatestProduct;
