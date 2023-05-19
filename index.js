const express = require('express');
const app = express();
const databaseMiddleware = require('./src/interface/middlewares/databaseMiddleware');
const personsRoutes = require('./src/interface/routes/person.routes')


// Middleware para la ruta principal
app.get('/', (req, res) => {
  res.sendFile('./public/index.html', { root: __dirname + '/' });
});
app.use(express.static('./public'));

// Middleware de conexión a la base de datos
app.use(databaseMiddleware);

// Ruta CRUD para persona 
app.use(personsRoutes);



// Inicia el servidor
app.set('port', process.env.port || 3001)
app.listen(app.get('port'), () => {
  console.log(`Servidor escuchando en el puerto`, app.get('port'));
});

