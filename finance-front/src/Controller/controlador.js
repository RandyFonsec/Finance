// Controlador.js
//Controlador redirige las llamadas al dao respectivo

const daoUsers = require('./DAO/daoUsers');
const daoIngresos = require('./DAO/daoIngresos');
const daoGastos = require('./DAO/daoGastos');
const daoReportes = require('./DAO/daoReportes');
const daoNegocio = require('./DAO/daoNegocio');

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
  //-------------------------------------------------------------------------------------------//
  getIngresosPormes: async (id_usuario,es_comercio,fechaInicio, fechaFin) => {
    const response = await daoReportes.getIngresosPormes(id_usuario,es_comercio,fechaInicio, fechaFin) ;
    return response;
  },
  getGastosPormes: async (id_usuario,es_comercio,fechaInicio, fechaFin) => {
    const response = await daoReportes.getGastosPormes(id_usuario,es_comercio,fechaInicio, fechaFin) ;
    return response;
  },
  getIngresosPordia: async (id_usuario,es_comercio,fecha) => {
    const response = await daoReportes.getIngresosPordia(id_usuario,es_comercio,fecha) ;
    return response;
  },
  getGastosPordia: async (id_usuario,es_comercio,fecha) => {
    const response = await daoReportes.getGastosPordia(id_usuario,es_comercio,fecha) ;
    return response;
  },
  //-------------------------------------------------------------------------------------------//
  getNegocio: async (id_usuario) => {
    const response = await daoNegocio.getNegocio(id_usuario);
    return response;
  },
  actualizarNegocio: async (nombre,id_usuario) => {
    const response = await daoNegocio.actualizarNegocio(nombre,id_usuario);
    return response;
  },
  getBalanceImpuestos: async (id_usuario,fechaInicio, fechaFin) => {
    const response = await daoNegocio.getBalanceImpuestos(id_usuario,fechaInicio, fechaFin);
    return response;
  },


  getIngresosNegocio: async (id_usuario) => {
    const response = await daoNegocio.getIngresos(id_usuario);
    return response;
  },
  registrarIngresoNegocio: async (gasto) => {
    const response = await daoNegocio.registrarIngreso(gasto);
    return response;
  },
  getCategoriasIngresoNegocio: async (id_usuario) => {
    const response = await daoNegocio.getCategoriasIngreso(id_usuario);
    return response;
  },
  registrarCategoriaIngresoNegocio: async (nombre,id_usuario) => {
    const response = await daoNegocio.registrarCategoriaIngreso(nombre,id_usuario);
    return response;
  },
  actualizarCategoriaIngresoNegocio: async (categoria) => {
    const response = await daoNegocio.actualizarCategoriaIngreso(categoria);
    return response;
  },
  eliminarCategoriaIngresoNegocio: async (id) => {
    const response = await daoNegocio.eliminarCategoriaIngreso(id);
    return response;
  },


  getGastosNegocio: async (id_usuario) => {
    const response = await daoNegocio.getGastos(id_usuario);
    return response;
  },
  registrarGastoNegocio: async (gasto) => {
    const response = await daoNegocio.registrarGasto(gasto);
    return response;
  },
  getCategoriasGastoNegocio: async (id_usuario) => {
    const response = await daoNegocio.getCategoriasGasto(id_usuario);
    return response;
  },
  registrarCategoriaGastoNegocio: async (nombre,id_usuario) => {
    const response = await daoNegocio.registrarCategoriaGasto(nombre,id_usuario);
    return response;
  },
  actualizarCategoriaGastoNegocio: async (categoria) => {
    const response = await daoNegocio.actualizarCategoriaGasto(categoria);
    return response;
  },
  eliminarCategoriaGastoNegocio: async (id) => {
    const response = await daoNegocio.eliminarCategoriaGasto(id);
    return response;
  },


  getImpuestos: async (id_negocio) => {
    const response = await daoNegocio.getImpuestos(id_negocio);
    return response;
  },
  registrarImpuesto: async (nombre,id_negocio,tasa) => {
    const response = await daoNegocio.registrarImpuesto(nombre,id_negocio,tasa);
    return response;
  },
  actualizarImpuesto: async (impuesto) => {
    const response = await daoNegocio.actualizarImpuesto(impuesto);
    return response;
  },
  eliminarImpuestos: async (id) => {
    const response = await daoNegocio.eliminarImpuestos(id);
    return response;
  },
};

module.exports = controlador;
