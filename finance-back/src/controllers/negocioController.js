const dbConnection = require('../../dbConfig');


const getNegocio = async (req, res) => {

    const usuarioID = req.params.id_usuario;
    const query = `CALL sp_getNegocio('${usuarioID}')`;
    
    dbConnection.query(query, (err, results) => {
        if (err) {
        res.status(500).send('Error al llamar al proceso almacenado');
        } else {
        res.json(results[0])
        }
    });
    }


const actualizarNegocio = async (req, res) => {

    const usuarioID = req.body.id_usuario;
    const nuevoNombre = req.body.nombre;
    const query = `CALL sp_ActualizarNegocio('${usuarioID}','${nuevoNombre}')`;
    
    dbConnection.query(query, (err, results) => {
        if (err) {
        res.status(500).send('Error al llamar al proceso almacenado');
        } else {
        res.json(results[0])
        }
    });
    }

const registrarImpuesto = async (req, res) => {

    const negocioID = req.body.id_negocio;
    const nombreImpuesto = req.body.nombre;
    const tasaImpuesto = req.body.tasa;
    const query = `CALL sp_CrearImpuesto('${negocioID}','${nombreImpuesto}','${tasaImpuesto}')`;
    
    dbConnection.query(query, (err, results) => {
        if (err) {
        res.status(500).send('Error al llamar al proceso almacenado');
        } else {
        res.json(results[0])
        }
    });
    }


const getImpuestos = async (req, res) => {

    const negocioID = req.params.id_negocio;
    const query = `CALL sp_getImpuestos('${negocioID}')`;
    
    dbConnection.query(query, (err, results) => {
        if (err) {
        res.status(500).send('Error al llamar al proceso almacenado');
        } else {
        res.json(results[0])
        }
    });
    }


const actualizarImpuesto = async (req, res) => {

    const impuestoID = req.body.id;
    const nuevoNombre = req.body.nombre;
    const nuevaTasa = req.body.tasa;
    const query = `CALL sp_ActualizarImpuesto('${impuestoID}','${nuevoNombre}','${nuevaTasa}')`;
    
    dbConnection.query(query, (err, results) => {
        if (err) {
        res.status(500).send('Error al llamar al proceso almacenado');
        } else {
        res.json(results[0])
        }
    });
    }


const eliminarImpuestos = async (req, res) => {

    const impuestoID = req.params.id;
    const query = `CALL sp_EliminarImpuesto('${impuestoID}')`;
    
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
    const query = `CALL sp_CrearCategoriaIngresoNegocio('${usuarioID}','${categoriaNombre}')`;
    
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
    const query = `CALL sp_getCategoriaIngresoNegocio('${usuarioID}')`;
    
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
    const query = `CALL sp_ActualizarCategoriaIngresoNegocio('${categoriaID}','${nuevoNombre}')`;
    
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
    const query = `CALL sp_EliminarCategoriaIngresoNegocio('${categoriaID}')`;
    
    dbConnection.query(query, (err, results) => {
        if (err) {
        res.status(500).send('Error al llamar al proceso almacenado');
        } else {
        res.json(results[0])
        }
    });
    }


const registrarCategoriaGasto = async (req, res) => {

const usuarioID = req.body.id_usuario;
const categoriaNombre = req.body.nombre;
const query = `CALL sp_CrearCategoriaGastoNegocio('${usuarioID}','${categoriaNombre}')`;

dbConnection.query(query, (err, results) => {
    if (err) {
    res.status(500).send('Error al llamar al proceso almacenado');
    } else {
    res.json(results[0])
    }
});
}

const getCategoriasGasto = async (req, res) => {

    const usuarioID = req.params.id_usuario;
    const query = `CALL sp_getCategoriaGastoNegocio('${usuarioID}')`;
    
    dbConnection.query(query, (err, results) => {
        if (err) {
        res.status(500).send('Error al llamar al proceso almacenado');
        } else {
        res.json(results[0])
        }
    });
    }


const actualizarCategoriaGasto = async (req, res) => {

    const categoriaID = req.body.id;
    const nuevoNombre = req.body.nombre;
    const query = `CALL sp_ActualizarCategoriaGastoNegocio('${categoriaID}','${nuevoNombre}')`;
    
    dbConnection.query(query, (err, results) => {
        if (err) {
        res.status(500).send('Error al llamar al proceso almacenado');
        } else {
        res.json(results[0])
        }
    });
    }


const eliminarCategoriaGasto = async (req, res) => {

    const categoriaID = req.body.id;
    const query = `CALL sp_EliminarCategoriaGastoNegocio('${categoriaID}')`;
    
    dbConnection.query(query, (err, results) => {
        if (err) {
        res.status(500).send('Error al llamar al proceso almacenado');
        } else {
        res.json(results[0])
        }
    });
    }


const registrarIngreso = async (req, res) => {

    const usuarioID = req.body.id_usuario;
    const ingresoFecha = req.body.fecha;
    const ingresoMonto = req.body.monto;
    const ingresoTitulo = req.body.titulo;
    const categoriaID = req.body.id_categoria;
    const ingresoDescripcion = req.body.descripcion;
    const query = `CALL sp_InsertarIngresoNegocio('${usuarioID}','${ingresoFecha.split("T")[0]}','${ingresoMonto}',
                                           '${ingresoTitulo}','${categoriaID}','${ingresoDescripcion}')`;
    
    dbConnection.query(query, (err, results) => {
        if (err) {
        res.status(500).send('Error al llamar al proceso almacenado');
        } else {
        res.json(results[0])
        }
    });
    }


const getIngresos = async (req, res) => {

    const usuarioID = req.params.id_usuario;
    const query = `CALL sp_getIngresos('${usuarioID}')`;
    
    dbConnection.query(query, (err, results) => {
        if (err) {
        res.status(500).send('Error al llamar al proceso almacenado');
        } else {
        res.json(results[0])
        }
    });
    }


const registrarGasto = async (req, res) => {

    const usuarioID = req.body.id_usuario;
    const gastoFecha = req.body.fecha;
    const gastoMonto = req.body.monto;
    const gastoTitulo = req.body.titulo;
    const categoriaID = req.body.id_categoria;
    const gastoDescripcion = req.body.descripcion;
    const query = `CALL sp_InsertarGastoNegocio('${usuarioID}','${gastoFecha.split("T")[0]}','${gastoMonto}',
                                           '${gastoTitulo}','${categoriaID}','${gastoDescripcion}')`;
    
    dbConnection.query(query, (err, results) => {
        if (err) {
        res.status(500).send('Error al llamar al proceso almacenado');
        } else {
        res.json(results[0])
        }
    });
    }


const getGastos = async (req, res) => {

    const usuarioID = req.params.id_usuario;
    const query = `CALL sp_getGastos('${usuarioID}')`;
    
    dbConnection.query(query, (err, results) => {
        if (err) {
        res.status(500).send('Error al llamar al proceso almacenado');
        } else {
        res.json(results[0])
        }
    });
    }

const getBalanceImpuestos = async (req, res) => {

    const idUsuario = req.body.id_usuario;
    const fechaInicio = req.body.fechaInicio;
    const fechaFin = req.body.fechaFin;
    const query = `CALL sp_getBalanceImpuestos('${idUsuario}','${fechaInicio.split("T")[0]}','${fechaFin.split("T")[0]}')`;
    
    dbConnection.query(query, (err, results) => {
        if (err) {
        res.status(500).send('Error al llamar al proceso almacenado');
        } else {
        res.json(results[0])
        }
    });
    }


module.exports = {
    getNegocio,
    actualizarNegocio,
    registrarImpuesto,
    getImpuestos,
    actualizarImpuesto,
    eliminarImpuestos,
    registrarCategoria,
    getCategorias,
    actualizarCategoria,
    eliminarCategoria,
    registrarCategoriaGasto,
    getCategoriasGasto,
    actualizarCategoriaGasto,
    eliminarCategoriaGasto,
    registrarIngreso,
    getIngresos,
    registrarGasto,
    getGastos,
    getBalanceImpuestos
  };