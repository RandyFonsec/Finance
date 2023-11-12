// daoUsers.js

//Se encarga de llamar a la api de esta direccion
const BASE = process.env.REACT_APP_BASE_URL;

const daoUsers = {
  getUsers: async () => {
    const url = BASE+`/users`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }

      return response.json();
    } catch (error) {
      console.error('Error en la función getCorreo:', error);
      throw error;
    }
  },

  getCorreo: async (correo) => {
    if (!correo) {
      return { response: [] };
    }

    const url = BASE+`/correo/${correo}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }

      return response.json();
    } catch (error) {
      console.error('Error en la función getCorreo:', error);
      throw error;
    }
  },

  getUser: async (correo, contrasenna) => {
  if (!correo || !contrasenna) {
    return { response: [] };
  }
  const url = BASE + '/user/login'; 
  const data = {
    correo,
    contrasenna,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if(response)
      return response.json();

  } catch (error) {
    console.error('Error en la función getUser:', error);
    throw error;
  }
},

updateUser: async (id,nombre,correo, contrasenna) => {
  
  const url = BASE + '/user/actualizar'; 
  const data = {
    id,
    nombre,
    correo,
    contrasenna,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if(response)
      return response;

  } catch (error) {
    console.error('Error en la función updateUser:', error);
    throw error;
  }
},

regisUser: async (nombre,correo, contrasenna) => {
  
  const url = BASE + '/user/registrar'; 
  const data = {
    nombre,
    correo,
    contrasenna,
  };

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if(response)
      return response;

  } catch (error) {
    console.error('Error en la función regisUser:', error);
    throw error;
  }
},

};

module.exports = daoUsers;
