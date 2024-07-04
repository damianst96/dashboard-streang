import React, { useEffect, useState } from 'react';

function LatestUser() {
  // Estado para almacenar los productos
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores
  let [lastUser, setLastUser] = useState([]);

  useEffect(() => {
    // Realiza la llamada a la API cuando el componente se monta
    fetch('http://localhost:3000/apis/users')
      .then(response => {
        return response.json();
      })
      .then(users => {
        // console.log(users); // Muestra los datos en la consola para depuración
        lastUser = users.data[users.data.length - 1];
        setLastUser(lastUser);
        setUsers(users.data); // Asume que los productos están en data.data
        setLoading(false); // Cambia el estado de carga a falso
      })
      .catch(error => {
        console.error("Error al obtener los usuarios:", error);
        setError(error.message);
        setLoading(false); // Cambia el estado de carga a falso incluso si hay un error
      });
  }, []); // El array vacío [] asegura que esto solo se ejecute una vez al montar el componente

  return (
    <div>
      <h1>Último usuario registrado</h1>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
          <p>Nombre: {lastUser.name} {lastUser.last_name}</p>
          <p>E-Mail: {lastUser.email}</p>
          <p>Nombre de usuario: {lastUser.user_name}</p>
    </div>
  );
}

export default LatestUser;