// daoUsers.js

//Se encarga de llamar a la api
const BASE = process.env.REACT_APP_BASE_URL;

const daoUsers = {
  getUsers: async () => {
    // Construye la URL con los parámetros adecuados para la API en tu servidor
    const url = BASE+`/users`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }

      return response.json(); // Parsea la respuesta JSON y la retorna
    } catch (error) {
      console.error('Error en la función getCorreo:', error);
      throw error;
    }
  },

  getCorreo: async (correo) => {
    if (!correo) {
      return { response: [] };
    }

    // Construye la URL con los parámetros adecuados para la API en tu servidor
    const url = BASE+`/correo/${correo}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }

      return response.json(); // Parsea la respuesta JSON y la retorna
    } catch (error) {
      console.error('Error en la función getCorreo:', error);
      throw error;
    }
  },
};

module.exports = daoUsers;
