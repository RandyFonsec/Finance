const Router = require('express');;
const {getIngresosPormes,getIngresosPordia,
       getGastosPormes,getGastosPordia} = require('../controllers/reportesController.js');


const router = Router();

// users route

router.post('/getIngresosPormes', getIngresosPormes);

router.post('/getIngresosPordia', getIngresosPordia);

router.post('/getGastosPormes', getGastosPormes);

router.post('/getGastosPordia', getGastosPordia);

module.exports = router;