const express = require('express');

const supermercadoController = require('./controllers/SupermercadoController');
const clienteController = require('./controllers/ClienteController');
const categoriaController = require('./controllers/CategoriaController');
const authController = require('./controllers/AuthController');
const produtoController = require('./controllers/ProdutoController');
const authMiddleware = require('./middlewares/auth');

const app = express();
const routes = express.Router();

app.use(authMiddleware);

routes.post('/supermercado/cadastro', supermercadoController.create);
routes.post('/cliente/cadastro', clienteController.create);
routes.post('/categoria/cadastro', authMiddleware, categoriaController.create);
routes.post('/produto/cadastro/:nomeCategoria', authMiddleware, produtoController.create);

routes.post('/authenticate/cliente', authController.authenticateCliente);
routes.post('/authenticate/supermercado', authController.authenticateSupermercado);

routes.get('/categoria/lista', authMiddleware, categoriaController.index);
routes.get('/produto/lista/:nomeCategoria', authMiddleware, produtoController.indexbycategory);
routes.get('/produto/:nomeCategoria', authMiddleware, produtoController.index);

routes.delete('/categoria/:nome', authMiddleware, categoriaController.delete);
routes.delete('/produto/:nomeCategoria', authMiddleware, produtoController.delete);

module.exports = routes;