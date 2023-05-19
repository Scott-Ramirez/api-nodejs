// ===============TEST PERSON REPOSITORY=====================
// const mysql = require('mysql');
// const PersonRepository = require('./src/domain/repositories/personRepository');

// // Configura los detalles de la conexión a la base de datos
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '4nthony$cott',
//   database: 'api'
// });

// // Crea una instancia del repositorio de personas
// const personRepository = new PersonRepository(connection);

// // Caso de prueba para getAllPersons
// test('getAllPersons debería devolver un array de personas', async () => {
//   const persons = await personRepository.getAllPersons();
//   expect(Array.isArray(persons)).toBe(true);
// });

// =============================TEST PERSON SERVICE=================================================
// const PersonService = require('./src/application/use-case/personService');
// const PersonRepository = require('./src/domain/repositories/personRepository');
// const PersonEntity = require('./src/domain/entities/personEntity');

// // Creamos un mock del repositorio de personas para las pruebas
// const mockPersonRepository = {
//   getAllPersons: jest.fn().mockResolvedValue([
//     new PersonEntity(1, 'John', 30),
//     new PersonEntity(2, 'Jane', 25),
//   ]),
// };

// // Creamos una instancia de PersonService utilizando el mock del repositorio
// const personService = new PersonService(mockPersonRepository);

// // Caso de prueba para getAllPersons
// test('getAllPersons devuelve todas las personas del repositorio', async () => {
//   const persons = await personService.getAllPersons();
//   expect(persons.length).toBe(2);
//   expect(persons[0].getId()).toBe(1);
//   expect(persons[0].getNombre()).toBe('John');
//   expect(persons[0].getEdad()).toBe(30);
//   // Resto de las expectativas para las personas obtenidas...
// });

// ====================TEST RUTA BUSCAR POR ID==========================


