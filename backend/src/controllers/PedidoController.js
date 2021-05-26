const connection = require('../database/connection');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async create(request, response) {
    const { horarioMarcado, pagamento, troco } = request.body;

    const status = 'Recebido';

    const idCliente = request.userData.id;
    const nomeCliente = request.userData.nome;
    const ruaCliente = request.userData.rua;
    const numeroRuaCliente = request.userData.numeroRua;
    const complementoCliente = request.userData.complemento;
    const telefoneCliente = request.userData.telefone;

    const id = uuidv4();

    try {

      if (await connection('pedidoProduto')
        .where('idCliente', idCliente)
        .groupBy('id')
        .havingNull('idPedido')
        .select() == null) {
        return response.status(400).send({ error: 'Nenhum produto no carrinho para compra!' });
      }

      let total = await connection('pedidoProduto')
        .where('idCliente', idCliente)
        .select()
        .sum({ totalSum: 'totalParcial' });
      total = total[0];
      total = total.totalSum;

      if (troco != 0) {
        await connection('pedido').insert({
          id,
          horarioMarcado,
          status,
          pagamento,
          total,
          troco,

          idCliente,
          nomeCliente,
          ruaCliente,
          numeroRuaCliente,
          complementoCliente,
          telefoneCliente
        });
      } else {
        await connection('pedido').insert({
          id,
          idCliente,
          horarioMarcado,
          status,
          pagamento,
          total,

          idCliente,
          nomeCliente,
          ruaCliente,
          numeroRuaCliente,
          complementoCliente,
          telefoneCliente
        });
      }

      await connection('pedidoProduto')
        .where('idCliente', idCliente)
        .whereNot('compra', 1)
        .select()
        .update({compra: 1});

      await connection('pedidoProduto')
        .where('idCliente', idCliente)
        .havingNull('idPedido')
        .select()
        .update({idPedido: id});

      const pedido = await connection('pedido')
        .where('id', id)
        .select()
        .first();

      return response.json(pedido);
    } catch (err) {
      return response.status(400).send({ error: 'Registro de Pedido falhou!' } + err);
    }
  },

  async index(request, response) {
    try {
      const pedido = await connection('pedido').select();

      return response.json(pedido);
    } catch (err) {
      return response.status(400).send({ error: 'Retorno do Pedido falhou!' } + err);
    }
  },

  async indexbyid(request, response) {
    const { id } = request.params;

    try {
      if (await connection('pedido').where('id', id).select().first() == null) {
        return response.status(400).send({ error: 'Pedido nao existente!' });
      }

      pedido = await connection('pedido').where('id', id).select().first();

      return response.json(pedido);
    } catch (err) {
      return response.status(400).send({ error: 'Retorno do Pedido falhou!' } + err);
    }
  },

  async update(request, response) {
    const { id } = request.params;
    const { status } = request.params;

    try {
      await connection('pedido').where('id', id).select().update({status: status});
      
      return response.status(204).send();
    } catch (err) {
      return response.status(400).send({ error: 'Alteracao do Pedido falhou!' } + err);
    }
  },
}