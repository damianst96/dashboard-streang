import React, { useEffect, useState } from 'react';

function CategoryProducts() {
  // Estado para almacenar los productos
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores

  let videogames = [];
  let consoles = [];
  let accesories = [];
  let audio = [];
  let pc = [];
  let others = [];

  function CategoryCount(array, category){
    products.map(function(product){
      if(product.category_id === category){
        array.push(product);
      }
    })
    return array.length;
  }

  useEffect(() => {
    // Realiza la llamada a la API cuando el componente se monta
    fetch('http://localhost:3000/apis/products')
      .then(response => {
        return response.json();
      })
      .then(products => {
        // console.log(products); // Muestra los datos en la consola para depuración
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
      <h1>Productos por categoría</h1>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        <li>Videojuegos: {CategoryCount(videogames, "videogames")}</li>
        <li>Consolas: {CategoryCount(consoles, "consoles")}</li>
        <li>Accesorios: {CategoryCount(accesories, "accesories")}</li>
        <li>Audio y Sonido: {CategoryCount(audio, "audio")}</li>
        <li>Computación: {CategoryCount(pc, "PC")}</li>
        <li>Otros: {CategoryCount(others, "others")}</li>
      </ul>
    </div>
  );
}

export default CategoryProducts;
