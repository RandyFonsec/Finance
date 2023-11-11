const dbConnection = require('../../dbConfig');


const getIngresosPormes = async (req, res) => {

    const idUsuario = req.body.id_usuario;
    const es_negocio = req.body.es_comercio;
    const fechaInicio = req.body.fechaInicio;
    const fechaFin = req.body.fechaFin;
    const query = `CALL sp_primerReporteIngresos('${idUsuario}','${es_negocio}','${fechaInicio}','${fechaFin}')`;
    dbConnection.query(query, (err, results) => {
        if (err) {
        res.status(500).send('Error al llamar al proceso almacenado');
        } else {
        res.json(results[0])
        }
    });
    }

const getIngresosPordia = async (req, res) => {

    const p_idUsuario = req.body.id_usuario;
    const p_es_comercio = req.body.es_comercio;
    const p_fecha = req.body.fecha;
    const query = `CALL sp_segundoReporteIngresos('${p_idUsuario}','${p_es_comercio}','${p_fecha}')`;
    dbConnection.query(query, (err, results) => {
        if (err) {
        res.status(500).send('Error al llamar al proceso almacenado');
        } else {
        res.json(results[0])
        }
    });
    }


const getGastosPormes = async (req, res) => {

    const idUsuario = req.body.id_usuario;
    const es_negocio = req.body.es_comercio;
    const fechaInicio = req.body.fechaInicio;
    const fechaFin = req.body.fechaFin;
    const query = `CALL sp_primerReporteGastos('${idUsuario}','${es_negocio}','${fechaInicio}','${fechaFin}')`;
    
    dbConnection.query(query, (err, results) => {
        if (err) {
        res.status(500).send('Error al llamar al proceso almacenado');
        } else {
        res.json(results[0])
        }
    });
    }

const getGastosPordia = async (req, res) => {

    const p_idUsuario = req.body.id_usuario;
    const p_es_comercio = req.body.es_comercio;
    const p_fecha = req.body.fecha;
    const query = `CALL sp_segundoReporteGastos('${p_idUsuario}','${p_es_comercio}','${p_fecha}')`;
    
    dbConnection.query(query, (err, results) => {
        if (err) {
        res.status(500).send('Error al llamar al proceso almacenado');
        } else {
        res.json(results[0])
        }
    });
    }


module.exports = {
    getIngresosPormes,
    getIngresosPordia,
    getGastosPormes,
    getGastosPordia
    
    };