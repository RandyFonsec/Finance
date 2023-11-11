// Controlador.js
//Controlador redirige las llamadas al dao respectivo

const daoUsers = require('./DAO/daoUsers');

const controlador = {
  getUsers: async () => {
    const response = await daoUsers.getUsers();
    return response;
  },
  getCorreo: async (correo) => {
    const response = await daoUsers.getCorreo(correo);
    return response;
  },
  getUser: async (correo,contrasenna) => {
    const response = await daoUsers.getUser(correo,contrasenna);
    return response;
  },
};

module.exports = controlador;
