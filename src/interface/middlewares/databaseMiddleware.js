// const connection = require('../../insfrastructure/config/database');

// Middleware de conexión a la base de datos
// function databaseMiddleware(req, res, next) {
//   req.db = connection;
//   next();
// }

// module.exports = databaseMiddleware;

const connection = require('../../insfrastructure/config/database');
const express = require('express');

// Middleware de conexión a la base de datos
function databaseMiddleware(req, res, next) {
  req.db = connection;
  next();
}

const app = express();
app.use(express.json()); // Middleware para procesar el cuerpo de la solicitud en formato JSON

module.exports = app;
