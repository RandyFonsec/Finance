const Router = require('express');;
const {getUsuarios, getCorreo} = require('../controllers/userController.js');


const router = Router();


// Registration route

// Login route
router.get('/users', getUsuarios);
router.get('/correo/:correo', getCorreo)

module.exports = router;