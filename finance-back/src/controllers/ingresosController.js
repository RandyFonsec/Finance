const dbConnection = require('../../dbConfig');


const registrarIngreso = async (req, res) => {

    const usuarioID = req.body.id_usuario;
    const ingresoFecha = req.body.fecha;
    const ingresoMonto = req.body.monto;
    const ingresoTitulo = req.body.titulo;
    const categoriaID = req.body.id_categoria;
    const ingresoDescripcion = req.body.descripcion;
    const query = `CALL sp_InsertarIngreso('${usuarioID}','${ingresoFecha}','${ingresoMonto}',
                                           '${ingresoTitulo}','${categoriaID}','${ingresoDescripcion}')`;
    
    dbConnection.query(query, (err, results) => {
        if (err) {
        res.status(500).send('Error al llamar al proceso almacenado');
        } else {
        res.json(results[0])
        }
    });
    }


const getIngresosRecientes = async (req, res) => {

    const idUsuario = req.body.id_usuario;
    const fechaInicio = req.body.fechaInicio;
    const fechaFin = req.body.fechaFin;
    const query = `CALL sp_getIngresosRecientes('${idUsuario}','${fechaInicio}','${fechaFin}')`;
    
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
    const query = `CALL sp_CrearCategoriaIngresoPersonal('${usuarioID}','${categoriaNombre}')`;
    
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
    const query = `CALL sp_getCategoriaIngresoPersonal('${usuarioID}')`;
    
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
    const query = `CALL sp_ActualizarCategoriaIngresoPersonal('${categoriaID}','${nuevoNombre}')`;
    
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
    const query = `CALL sp_EliminarCategoriaIngresoPersonal('${categoriaID}')`;
    
    dbConnection.query(query, (err, results) => {
        if (err) {
        res.status(500).send('Error al llamar al proceso almacenado');
        } else {
        res.json(results[0])
        }
    });
    }



module.exports = {
    getIngresosRecientes,
    registrarIngreso,
    registrarCategoria,
    getCategorias,
    actualizarCategoria,
    eliminarCategoria,
  };