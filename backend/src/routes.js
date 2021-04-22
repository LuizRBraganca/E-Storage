const express = require('express');

const supermercadoController = require('./controllers/SupermercadoController');
const loginController = require('./controllers/LoginController');

const routes = express.Router();

routes.post('/', supermercadoController.create);
routes.post('/login', loginController.loginSupermercado);

module.exports = routes;