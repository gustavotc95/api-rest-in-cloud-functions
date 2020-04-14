const express = require('express');
const admin = require('firebase-admin');

admin.initializeApp();

const TodoController = require('./controllers/TodoController');

const routers = express.Router();

routers.get('/todos', TodoController.index);
routers.post('/todos', TodoController.create);


module.exports = routers
