const connection = require('../database/connection');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = {
  async authenticateCliente(request, response) {
    const { email, senha } = request.body;

    const user = await connection('cliente')
    .where('email', email)
    .select()
    .first();

    if(!user){
      return response.status(400).send({ error: 'Usuario não encontrado!' });
    }

    if(!await bcrypt.compare(senha, user.senha)){
      return response.status(400).send({ error: 'Senha incorreta!' });
    }

    user.senha = undefined;
    
    const token = jwt.sign({ id: user.id }, authConfig.secret, {
      expiresIn: 86400,
    });

    return response.send({ user, token });
  },

  async authenticateSupermercado(request, response) {
    const { nome, senha } = request.body;

    const user = await connection('supermercado')
    .where('nome', nome)
    .select()
    .first();

    if(!user){
      return response.status(400).send({ error: 'Supermercado não encontrado!' });
    }

    if(!await bcrypt.compare(senha, user.senha)){
      return response.status(400).send({ error: 'Senha incorreta!' });
    }

    user.senha = undefined;
    
    const token = jwt.sign({ id: user.nome }, authConfig.secret, {
      expiresIn: 86400,
    });

    return response.send({ user, token });
  }
};