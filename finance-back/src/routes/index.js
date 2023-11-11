const user = require('./userRoute.js');
const gastos = require('./gastosRoute.js');
const ingresos = require('./ingresosRoute.js');
const negocio = require('./negocioRoute.js');
const reportes = require('./reportesRoute.js');

module.exports = {
    user,
    gastos,
    ingresos,
    negocio,
    reportes,
  };