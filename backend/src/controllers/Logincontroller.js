const connection = require('../database/connection');

module.exports = {
  async loginSupermercado(request, response) {
    const { nome, senha } = request.body;

    const login = await connection('supermercado')
      .where('nome', nome)
      .select('nome')
      .first();

    const password = await connection('supermercado')
      .where('senha', senha)
      .select('senha')
      .first();

    if (!login) {
      return response.status(400).json({ error: 'Nome incorreto!' });
    }

    if (!password) {
      return response.status(400).json({ error: 'Senha incorreta!' });
    }

    return response.json(login);
  }
}