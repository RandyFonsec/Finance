import React, { useState} from 'react';
import controlador from './Controller/controlador.js'

function Test() {
  const [correo, setCorreo] = useState(''); // Estado para el correo
  const [usuario, setUsuario] = useState(null); // Estado para almacenar el resultado
  const [usuarios, setUsuarios] = useState(null); // Estado para almacenar el resultado
 const obtenerUsuarioPorCorreo = async () => {
    
    //Llamada al controlador
    await controlador.getCorreo(correo)
      .then((data) => {
        setUsuario(data[0]); //un solo dato
      })
      .catch((error) => {
        console.error('Error al obtener el usuario:', error);
      });

      await controlador.getUsers()
      .then((data) => {
        setUsuarios(data); //un solo dato
      })
      .catch((error) => {
        console.error('Error al obtener los usuarios:', error);
      });

  };


  return (
    <div>
      <input
        type="text"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        placeholder="Correo"
      />
      <button onClick={obtenerUsuarioPorCorreo}>Obtener Usuario</button>

      {usuario && (
        <div>
          <p>ID: {usuario.id}</p>
          <p>Nombre: {usuario.nombre}</p>
          <p>Correo: {usuario.correo}</p>
        </div>
      )}

      {usuarios && (

        <div>
        <h1>Usuarios</h1>
    {usuarios.map((user) => (
      <div key={user.id}>
        <p>ID: {user.id}</p>
        <p>Nombre: {user.nombre}</p>
        <p>Correo: {user.correo}</p>
      </div>
    ))}
  </div>
      )}
    </div>
  );
}

export default Test;
