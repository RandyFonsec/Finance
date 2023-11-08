const Router = require('express');;
const {getIngresosRecientes,registrarIngreso,registrarCategoria,getCategorias,
       actualizarCategoria, eliminarCategoria} = require('../controllers/ingresosController.js');


const router = Router();

// users route
router.post('/getIngresosRecientes', getIngresosRecientes);

router.put('/registrar', registrarIngreso);

router.put('/registrarCategoria', registrarCategoria);

router.get('/getCategorias/:id_usuario', getCategorias);

router.post('/actualizarCategoria', actualizarCategoria);

router.post('/eliminarCategoria', eliminarCategoria);

module.exports = router;