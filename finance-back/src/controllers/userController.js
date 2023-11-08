const dbConnection = require('../../dbConfig');


const verificarLogin = async (req, res) => {

const correo = req.body.correo;
const contrasenna = req.body.contrasenna;
const query = `CALL sp_VerificarUsuario('${correo}','${contrasenna}')`;

dbConnection.query(query, (err, results) => {
    if (err) {
    res.status(500).send('Error al llamar al proceso almacenado');
    } else {
    res.json(results[0])
    }
});
}


const registrarUsuario = async (req, res) => {

  const nombre = req.body.nombre;
  const correo = req.body.correo;
  const contrasenna = req.body.contrasenna;
  const query = `CALL sp_InsertarUsuario('${nombre}','${correo}','${contrasenna}')`;
  
  dbConnection.query(query, (err, results) => {
      if (err) {
      res.status(500).send('Error al llamar al proceso almacenado');
      } else {
      res.json(results[0])
      }
  });
  }


  const actualizarUsuario = async (req, res) => {

    const id = req.body.id;
    const nombre = req.body.nombre;
    const correo = req.body.correo;
    const contrasenna = req.body.contrasenna;
    const query = `CALL sp_ActualizarUsuario('${id}','${nombre}','${correo}','${contrasenna}')`;
    
    dbConnection.query(query, (err, results) => {
        if (err) {
        res.status(500).send('Error al llamar al proceso almacenado');
        } else {
        res.json(results[0])
        }
    });
    }

  module.exports = {
    verificarLogin,
    registrarUsuario,
    actualizarUsuario,
  };