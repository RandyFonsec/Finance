// Controlador.js
//Controlador redirige las llamadas al dao respectivo

const daoUsers = require('./DAO/daoUsers');
const daoIngresos = require('./DAO/daoIngresos');
const daoGastos = require('./DAO/daoGastos');

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
  //-------------------------------------------------------------------------------------------//
  getIngresosRecientes: async (id_usuario,fechaInicio, fechaFin) => {
    const response = await daoIngresos.getIngresosRecientes(id_usuario,fechaInicio, fechaFin);
    return response;
  },
  registrarIngreso: async (gasto) => {
    const response = await daoIngresos.registrarIngreso(gasto);
    return response;
  },
  getCategorias: async (id_usuario) => {
    const response = await daoIngresos.getCategorias(id_usuario);
    return response;
  },
  registrarCategoria: async (nombre,id_usuario) => {
    const response = await daoIngresos.registrarCategoria(nombre,id_usuario);
    return response;
  },
  actualizarCategoria: async (categoria) => {
    const response = await daoIngresos.actualizarCategoria(categoria);
    return response;
  },
  eliminarCategoria: async (id) => {
    const response = await daoIngresos.eliminarCategoria(id);
    return response;
  },
  //-------------------------------------------------------------------------------------------//
  getGastosRecientes: async (id_usuario,fechaInicio, fechaFin) => {
    const response = await daoGastos.getGastosRecientes(id_usuario,fechaInicio, fechaFin);
    return response;
  },
  registrarGasto: async (gasto) => {
    const response = await daoGastos.registrarGasto(gasto);
    return response;
  },
  getCategoriasGasto: async (id_usuario) => {
    const response = await daoGastos.getCategorias(id_usuario);
    return response;
  },
  registrarCategoriaGasto: async (nombre,id_usuario) => {
    const response = await daoGastos.registrarCategoria(nombre,id_usuario);
    return response;
  },
  actualizarCategoriaGasto: async (categoria) => {
    const response = await daoGastos.actualizarCategoria(categoria);
    return response;
  },
  eliminarCategoriaGasto: async (id) => {
    const response = await daoGastos.eliminarCategoria(id);
    return response;
  },
};

module.exports = controlador;
