const dbConnection = require('../../dbConfig');

const getUsuarios = async (req, res) => {

const query = 'SELECT * FROM user';
dbConnection.query(query, (err, results) => {
    if (err) {
    res.status(500).send('Error al obtener usuarios de la base de datos');
    } else {
    res.json(results);
    }
});
}

const getCorreo = async (req, res) => {

const correo = req.params.correo;
const query = `CALL ObtenerUsuarioPorCorreo('${correo}')`;

dbConnection.query(query, (err, results) => {
    if (err) {
    res.status(500).send('Error al llamar al proceso almacenado');
    } else {
    res.json(results[0])
    }
});
}

  module.exports = {
    getUsuarios,
    getCorreo,
  };