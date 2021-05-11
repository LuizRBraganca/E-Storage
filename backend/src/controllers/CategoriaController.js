const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { nome, filename, path } = request.body;

    try {
      if (await connection('categoria').where('nome', nome).select().first()) {
        return response.status(400).send({ error: 'Categoria ja criada!' });
      }

      await connection('categoria').insert({
        nome,
        filename,
        path
      });

      const categoria = await connection('categoria')
      .where('nome', nome)
      .select()
      .first();

      return response.json({ categoria });
    } catch (err) {
      return response.status(400).send({ error: 'Registro de Categoria falhou!' });
    }
  },

  async index(request, response) {
    const categoria = await connection('categoria').select();

    return response.json(categoria);
  },

  async delete(request, response) {
    const { nome } = request.params;

    if (!await connection('categoria').where('nome', nome).select().first()) {
      return response.status(400).send({ error: 'Categoria nao existente!' });
    }

    await connection('categoria').where('nome', nome).delete();

    return response.status(204).send();
  }
};