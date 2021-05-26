const connection = require('../database/connection');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async create(request, response) {
    const { nomeProduto, quantidade } = request.body;
    const idCliente = request.userData;
    const id = uuidv4();

    try {
      if (await connection('pedidoProduto')
      .where(('idCliente', idCliente) && ('nomeProduto', { nomeProduto })).select().first()) {
      return response.status(400).send({ error: 'Produto ja existente no pedido!' });
    }

      const produto = await connection('produto').where('nome', nomeProduto).select().first();
      const preco = produto.preco;
      const totalParcial = preco * quantidade;

      await connection('pedidoProduto').insert({
        id,
        idCliente,
        nomeProduto,
        preco,
        quantidade,
        totalParcial
      });

      const pedidoProduto = await connection('pedidoProduto')
      .where('id', id)
      .select()
      .first();

      return response.json( pedidoProduto );
    } catch (err) {
      return response.status(400).send({ error: 'Registro de Produto do Pedido falhou!' } + err);
    }
  },

  async indexbyidcliente(request, response) {
    const idCliente = request.userData;

    try {
    const pedidoProduto = await connection('pedidoProduto')
    .where('idCliente', idCliente)
    .groupBy('id')
    .havingNull('idPedido')
    .select();

    return response.json(pedidoProduto);
    } catch (err) {
      return response.status(400).send({ error: 'Retorno de Produto do Pedido falhou!' } + err);
    }
  },

  async delete(request, response) {
    const idCliente = request.userData;
    const { nomeProduto } = request.params;

    try {
      if (await connection('pedidoProduto')
        .where(('idCliente', idCliente) && ('nomeProduto', { nomeProduto })).select() == null) {
        return response.status(400).send({ error: 'Produto nao existente no pedido!' });
      }

      await connection('pedidoProduto').where(('idCliente', idCliente) && ('nomeProduto', { nomeProduto }))
        .delete();

      return response.status(204).send();
    } catch (err) {
      return response.status(400).send({ error: 'Exclusao de Produto do Pedido falhou!' } + err);
    }
  }
}