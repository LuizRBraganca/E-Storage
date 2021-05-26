const connection = require('../database/connection');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async create(request, response) {
    const { horarioMarcado, pagamento, troco } = request.body;
    const status = 'Recebido';
    const idCliente = request.userData;
    const id = uuidv4();

    try {
      if (await connection('pedido')
      .where(('idCliente', idCliente) && ('id', { id })).select().first()) {
      return response.status(400).send({ error: 'Pedido ja feito!' });
    }

      let total = await connection('pedidoProduto').where('idCliente', idCliente).select().sum({ totalSum: 'totalParcial' });
      total = total[0];
      total = total.totalSum;
      
      if(troco != 0){
      await connection('pedido').insert({
        id,
        idCliente,
        horarioMarcado,
        status,
        pagamento,
        total,
        troco
      });
    } else {
      await connection('pedido').insert({
        id,
        idCliente,
        horarioMarcado,
        status,
        pagamento,
        total
      });
    }

      await connection('pedidoProduto').where('idCliente', idCliente).select().update('idPedido', id);

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

  async update(request, response){
    const id = request.params;
    const { status } = request.params;
    try {
      if((status == 'Concluido') || (status == 'Cancelado')){
      const pedido = await connection('pedido').where('id', { id }).column('idCliente').select().first();
      await connection('pedidoProduto').where('idCliente', pedido).select().first().update('idCliente', null);
      await connection('pedido').where('id', id).select().update('status', status);
      return response.status(204);
      } else {
      await connection('pedido').where('id', id).select().update('status', status);
      return response.status(204);
      }
      } catch (err) {
        return response.status(400).send({ error: 'Alteracao do Pedido falhou!' } + err);
      }
  },

  async delete(request, response) {
    const { id } = request.params;

    try {
      if (await connection('pedido').where('id', id).select().first() == null) {
        return response.status(400).send({ error: 'Pedido nao existente!' });
      }

      await connection('pedido').where('id', id).delete();

      return response.status(204).send();
    } catch (err) {
      return response.status(400).send({ error: 'Exclusao do Pedido falhou!' } + err);
    }
  },

}