const express = require('express');
const multer = require('multer');

const supermercadoController = require('./controllers/SupermercadoController');
const clienteController = require('./controllers/ClienteController');
const categoriaController = require('./controllers/CategoriaController');
const authController = require('./controllers/AuthController');
const produtoController = require('./controllers/ProdutoController');
const uploadController = require('./controllers/UploadController');
const estoqueController = require('./controllers/EstoqueController');
const pedidoProdutoController = require('./controllers/PedidoProdutoController');
const pedidoController = require('./controllers/PedidoController');

const authMiddleware = require('./middlewares/auth');
const multerConfig = require('./config/multer');

const app = express();
const routes = express.Router();

app.use(authMiddleware);

routes.post('/supermercado/cadastro', supermercadoController.create);
routes.post('/cliente/cadastro', clienteController.create);
routes.post('/categoria/cadastro', authMiddleware, categoriaController.create);
routes.post('/produto/cadastro/:nomeCategoria', authMiddleware, produtoController.create);
routes.post('/upload', authMiddleware, multer(multerConfig).single('file'), uploadController.create);
routes.post('/estoque/cadastro', authMiddleware, estoqueController.create);
routes.post('/carrinho/cadastro', authMiddleware, pedidoProdutoController.create);
routes.post('/pedido/cadastro', authMiddleware, pedidoController.create);

routes.post('/authenticate/cliente', authController.authenticateCliente);
routes.post('/authenticate/supermercado', authController.authenticateSupermercado);

routes.get('/categoria/lista', authMiddleware, categoriaController.index);
routes.get('/produto/lista/:nomeCategoria', authMiddleware, produtoController.indexbycategory);
routes.get('/produto/:nomeCategoria/:nome', authMiddleware, produtoController.index);
routes.get('/estoque/lista', authMiddleware, estoqueController.index);
routes.get('/carrinho/lista', authMiddleware, pedidoProdutoController.indexbyidcliente);
routes.get('/pedido/lista/:idPedido', authMiddleware, pedidoProdutoController.indexbyidpedido);
routes.get('/pedido/lista', authMiddleware, pedidoController.index);
routes.get('/pedido/:id', authMiddleware, pedidoController.indexbyid);

routes.patch('/pedido/:id/:status', authMiddleware, pedidoController.update);

routes.delete('/categoria/:nome', authMiddleware, categoriaController.delete);
routes.delete('/produto/:nomeCategoria/:nome', authMiddleware, produtoController.delete);
routes.delete('/estoque/:id', authMiddleware, estoqueController.delete);
routes.delete('/carrinho/:nomeProduto', authMiddleware, pedidoProdutoController.delete);

module.exports = routes;