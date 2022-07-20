const express = require('express');
const logger = require('../logger/logger');

const app = express();

const users = [{ nome: 'Douglas', sobreNome: 'Morais', nomeDeUsuario: 'douglasmorais23' }];

app.get('/users', (req, res) => {
  logger.info('users route');
  res.json(users);
});

app.get('/users/:userName', (req, res) => {
  logger.info(`filtrar usuários por nome de usuário:::::${req.params.userName}`);
  const user = users.filter(usr => req.params.userName === usr.userName);
  res.json(user);
});

app.post('/user', (req, res) => {
  users.push(req.body);
  res.json(users);
});

module.exports = app;
