const Router = require('express');;
const {getGastosRecientes,registrarGasto,registrarCategoria,getCategorias,
       actualizarCategoria, eliminarCategoria} = require('../controllers/gastosController.js');


const router = Router();

// users route
router.post('/getGastosRecientes', getGastosRecientes);

router.put('/registrar', registrarGasto);

router.put('/registrarCategoria', registrarCategoria);

router.get('/getCategorias/:id_usuario', getCategorias);

router.post('/actualizarCategoria', actualizarCategoria);

router.post('/eliminarCategoria', eliminarCategoria);

module.exports = router;