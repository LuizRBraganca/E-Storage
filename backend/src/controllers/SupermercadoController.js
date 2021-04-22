const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { nome, senha, rua, numeroRua, telefone } = request.body;

    const supermercado = await connection('supermercado').insert({
      nome,
      senha,
      rua,
      numeroRua,
      telefone,
    })

    return response.json(supermercado);
  }
};