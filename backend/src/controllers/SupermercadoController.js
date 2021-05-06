const connection = require('../database/connection');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = {
  async create(request, response) {
    const { nome, rua, numeroRua, telefone } = request.body;
    let { senha } = request.body;

    senha = bcrypt.hashSync(senha, 10);

    await connection('supermercado').insert({
      nome,
      senha,
      rua,
      numeroRua,
      telefone,
    });

    const user = await connection('supermercado').where('nome', nome).select().first();

    user.senha = undefined;

    const token = jwt.sign({ id: user.nome }, authConfig.secret, {
      expiresIn: 86400,
    });

    return response.status(201).send({ user, token });
  }
};