const Router = require('express');;
const {registrarIngreso,registrarGasto,getNegocio,actualizarNegocio,registrarImpuesto,
       getImpuestos, actualizarImpuesto,eliminarImpuestos,registrarCategoria,getCategorias,
       actualizarCategoria, eliminarCategoria, registrarCategoriaGasto,getCategoriasGasto,
       actualizarCategoriaGasto, eliminarCategoriaGasto,getBalanceImpuestos,
       getIngresos,getGastos} = require('../controllers/negocioController.js');


const router = Router();

// users route
router.get('/getNegocio/:id_usuario', getNegocio);

router.post('/actualizarNegocio', actualizarNegocio);


router.put('/registrarImpuesto', registrarImpuesto);

router.get('/getImpuestos/:id_negocio', getImpuestos);

router.post('/actualizarImpuesto', actualizarImpuesto);

router.delete('/eliminarImpuestos/:id', eliminarImpuestos);


router.put('/registrarCategoriaIngreso', registrarCategoria);

router.get('/getCategoriasIngreso/:id_usuario', getCategorias);

router.post('/actualizarCategoriaIngreso', actualizarCategoria);

router.post('/eliminarCategoriaIngreso', eliminarCategoria);


router.put('/registrarCategoriaGasto', registrarCategoriaGasto);

router.get('/getCategorias/:id_usuario', getCategoriasGasto);

router.post('/actualizarCategoriaGasto', actualizarCategoriaGasto);

router.post('/eliminarCategoriaGasto', eliminarCategoriaGasto);


router.put('/registrarIngreso', registrarIngreso);

router.get('/getIngresos/:id_usuario', getIngresos);

router.put('/registrarGasto', registrarGasto);

router.get('/getGastos/:id_usuario', getGastos);

router.post('/getBalanceImpuestos', getBalanceImpuestos);



module.exports = router;