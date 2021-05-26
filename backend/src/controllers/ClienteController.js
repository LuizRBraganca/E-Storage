const connection = require('../database/connection');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = {
  async create(request, response) {
    const { nome, rua, numeroRua, complemento, telefone, email } = request.body;
    let { senha } = request.body;
    const id = uuidv4();
    
    senha = bcrypt.hashSync(senha, 10);
    
    try {
      if(await connection('cliente').where('email', email).select().first()) {
        return response.status(400).send({ error: 'Email ja utilizado!' });
      }

      await connection('cliente').insert({
        id,
        nome,
        senha,
        rua,
        numeroRua,
        complemento,
        telefone,
        email,
      });

      const user = await connection('cliente').where('email', email).select().first();

      user.senha = undefined;

      const token = jwt.sign({ id: user }, authConfig.secret, {
        expiresIn: 86400,
      });

      return response.status(201).send({ user, token });
    } catch (err) {  
      return response.status(400).send({ error: ('Cadastro falhou! ' + err) });
    }
  }
};