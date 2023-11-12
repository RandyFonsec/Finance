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
  updateUser: async (id,nombre,correo,contrasenna) => {
    const response = await daoUsers.updateUser(id,nombre,correo,contrasenna);
    return response;
  },
  regisUser: async (nombre,correo,contrasenna) => {
    const response = await daoUsers.regisUser(nombre,correo,contrasenna);
    return response;
  },
};

module.exports = controlador;
