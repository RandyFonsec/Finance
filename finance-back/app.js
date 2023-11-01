// app.js
const express = require('express');
const cors = require('cors');
//const dbConnection = require('./');
const routes = require('./src/routes/apiRoute.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

routes(app);

/*app.get('/users', (req, res) => {
  const query = 'SELECT * FROM user';
  dbConnection.query(query, (err, results) => {
    if (err) {
      res.status(500).send('Error al obtener usuarios de la base de datos');
    } else {
      res.json(results);
    }
  });
});


app.get('/correo/:correo', (req, res) => {
  const correo = req.params.correo;
  const query = `CALL ObtenerUsuarioPorCorreo('${correo}')`;
  
  dbConnection.query(query, (err, results) => {
    if (err) {
      res.status(500).send('Error al llamar al proceso almacenado');
    } else {
      res.json(results[0])
    }
  });
});*/


app.listen(port, () => {
  console.log(`Servidor Express en ejecución en el puerto ${port}`);
});
