const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { nome, marca, peso, medida, preco, detalhamento, filename, path } = request.body;
    const nomeSupermercado = request.userData;
    const { nomeCategoria } = request.params;

    try {
      if (await connection('produto').where('nome', nome).select().first()) {
        return response.status(400).send({ error: 'Produto ja criado!' });
      }

      await connection('produto').insert({
        nome,
        marca,
        peso,
        medida,
        preco,
        detalhamento,
        nomeSupermercado,
        nomeCategoria,
        filename,
        path
      });

      const produto = await connection('produto')
      .where('nome', nome)
      .select()
      .first();

      return response.json({ produto });
    } catch (err) {
      return response.status(400).send({ error: 'Registro de Produto falhou!' } + err);
    }
  },

  async index(request, response) {
    const nome = request.body;
    const nomeCategoria = request.params;

    const produto = await connection('produto')
    .where(('nomeCategoria', nomeCategoria) && ('nome', nome))
    .select()
    .first();

    return response.json(produto);
  },

  async indexbycategory(request, response) {
    const { nomeCategoria } = request.params;

    const produto = await connection('produto')
    .where('nomeCategoria', nomeCategoria)
    .select();

    return response.json(produto);
  },

  async delete(request, response) {
    const { nomeCategoria } = request.params;
    const nome = request.body;

    try {
    if (await connection('produto')
    .where(('nomeCategoria', nomeCategoria) && ('nome', nome)).select() == null) {
      return response.status(400).send({ error: 'Produto nao existente!' });
    }
    await connection('produto').where(('nomeCategoria', nomeCategoria) && ('nome', nome))
    .delete();
    return response.status(204).send();
  } catch(err) {
    return response.status(400).send({ error: 'Registro de Produto falhou!' } + err);
  }
  }
};