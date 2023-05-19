const mysql = require('mysql');
// const myconn= require('express-myconnection')

const dbOptions = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '4nthony$cott',
  database: 'api'
};

// Crea la conexión a la base de datos
const connection = mysql.createConnection(dbOptions);

// Conecta a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

module.exports = connection;
