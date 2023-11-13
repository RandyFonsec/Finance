const dbConnection = require('../../dbConfig');


const registrarGasto = async (req, res) => {

    const usuarioID = req.body.id_usuario;
    const gastoFecha = req.body.fecha;
    const gastoMonto = req.body.monto;
    const gastoTitulo = req.body.titulo;
    const categoriaID = req.body.id_categoria;
    const gastoDescripcion = req.body.descripcion;
    const query = `CALL sp_InsertarGasto('${usuarioID}','${gastoFecha.split("T")[0]}','${gastoMonto}',
                                           '${gastoTitulo}','${categoriaID}','${gastoDescripcion}')`;
    
    dbConnection.query(query, (err, results) => {
        if (err) {
        res.status(500).send('Error al llamar al proceso almacenado');
        } else {
        res.json(results[0])
        }
    });
    }


const getGastosRecientes = async (req, res) => {

    const idUsuario = req.body.id_usuario;
    const fechaInicio = req.body.fechaInicio;
    const fechaFin = req.body.fechaFin;
    const query = `CALL sp_getGastosRecientes('${idUsuario}','${fechaInicio.split("T")[0]}','${fechaFin.split("T")[0]}')`;
    
    dbConnection.query(query, (err, results) => {
        if (err) {
        res.status(500).send('Error al llamar al proceso almacenado');
        } else {
        res.json(results[0])
        }
    });
    }


const registrarCategoria = async (req, res) => {

    const usuarioID = req.body.id_usuario;
    const categoriaNombre = req.body.nombre;
    const query = `CALL sp_CrearCategoriaGastoPersonal('${usuarioID}','${categoriaNombre}')`;
    
    dbConnection.query(query, (err, results) => {
        if (err) {
        res.status(500).send('Error al llamar al proceso almacenado');
        } else {
        res.json(results[0])
        }
    });
    }

const getCategorias = async (req, res) => {

    const usuarioID = req.params.id_usuario;
    const query = `CALL sp_getCategoriaGastoPersonal('${usuarioID}')`;
    
    dbConnection.query(query, (err, results) => {
        if (err) {
        res.status(500).send('Error al llamar al proceso almacenado');
        } else {
        res.json(results[0])
        }
    });
    }


const actualizarCategoria = async (req, res) => {

    const categoriaID = req.body.id;
    const nuevoNombre = req.body.nombre;
    const query = `CALL sp_ActualizarCategoriaGastoPersonal('${categoriaID}','${nuevoNombre}')`;
    
    dbConnection.query(query, (err, results) => {
        if (err) {
        res.status(500).send('Error al llamar al proceso almacenado');
        } else {
        res.json(results[0])
        }
    });
    }


const eliminarCategoria = async (req, res) => {

    const categoriaID = req.body.id;
    const query = `CALL sp_EliminarCategoriaGastoPersonal('${categoriaID}')`;
    
    dbConnection.query(query, (err, results) => {
        if (err) {
        res.status(500).send('Error al llamar al proceso almacenado');
        } else {
        res.json(results[0])
        }
    });
    }



module.exports = {
    getGastosRecientes,
    registrarGasto,
    registrarCategoria,
    getCategorias,
    actualizarCategoria,
    eliminarCategoria,
  };