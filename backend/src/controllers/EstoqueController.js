const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { nome, marca, data_de_fabricacao, data_de_validade, quantidade } = request.body;
    const idCliente = request.userData;

    try {
      if (await connection('estoque').where(('idCliente', idCliente) && ('nome', { nome })).select().first()) {
        return response.status(400).send({ error: 'Produto existente no estoque!' });
      }

      await connection('estoque').insert({
        idCliente,
        nome,
        marca,
        data_de_fabricacao,
        data_de_validade,
        quantidade
      });

      const estoque = await connection('estoque')
        .where('idCliente', idCliente)
        .select();

      return response.json( estoque );
    } catch (err) {
      return response.status(400).send({ error: 'Registro de produto no estoque falhou!' } + err);
    }
  },

  async index(request, response) {
    const idCliente = request.userData;

    try {
      const estoque = await connection('estoque')
        .where('idCliente', idCliente)
        .select();

      return response.json(estoque);
    } catch (err) {
      return response.status(400).send({ error: 'Retorno de estoque falhou!' } + err);
    }
  },

  async delete(request, response) {
    const idCliente = request.userData;
    const { nome } = request.params;

    try {
      if (await connection('estoque')
        .where(('idCliente', idCliente) && ('nome', { nome} )).select() == null) {
        return response.status(400).send({ error: 'Produto nao existente no estoque!' });
      }

      await connection('estoque').where(('idCliente', idCliente) && ('nome', { nome }))
        .delete();

      return response.status(204).send();
    } catch (err) {
      return response.status(400).send({ error: 'Exclusao de Estoque falhou!' } + err);
    }
  }
};