const express = require('express');
const SessionControler = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionControler.store);

module.exports = routes;