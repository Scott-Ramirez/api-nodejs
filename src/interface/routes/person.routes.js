const express = require('express');
const router = express.Router();


// Importa los repositorios y servicios necesarios
const PersonRepository = require('../../domain/repositories/personRepository');

const PersonService = require('../../application/use-case/personService');


// Crea una instancia del repositorio
const connection = require('../../insfrastructure/config/database');
const personRepository = new PersonRepository(connection);


// Crea una instancia del servicio y pasa el repositorio
const personService = new PersonService(personRepository);


// Define la ruta para obtener todas las personas
router.get('/persons', async (req, res) => {
  try {
    const persons = await personService.getAllPersons();
    res.json(persons);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrio un error con el servidor. Se ha caido y estamos querindo levantarlo' });
  }
});

// RUTA PARA PODER HACER PAGINACION 
// router.get('/persons', async (req, res) => {
//   try {
//     // Obtiene los parámetros de la consulta
//     const { page, pageSize } = req.query;
    
//     // Convierte los parámetros a números enteros
//     const pageNumber = parseInt(page);
//     const limit = parseInt(pageSize);

//     // Calcula el offset
//     const offset = (pageNumber - 1) * limit;

//     // Llama al método en el servicio para obtener las personas paginadas
//     const persons = await personService.getPersonsPaginated(offset, limit);

//     // Envía la respuesta al cliente
//     res.json(persons);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error en el servidor' });
//   }
// });
// ========================================================================


// BUSCAR PERSONA POR ID
router.get('/persons/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const person = await personService.getPersonById(id);

    if (person) {
      res.json(person);
    } else {
      res.status(404).json({ error: 'Persona no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'servidor caido' });
  }

  //METODO PARA ELIMINAR PERSONA
  router.delete('/persons/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const result = await personService.deletePersonById(id);

      if (result) {
        res.json({ message: 'Persona eliminada correctamente' });
      } else {
        res.status(404).json({ error: 'Persona no encontrada' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error en el servidor' });
    }
  });

  // Metodo para insertar registros 
  router.post('/persons', async (req, res) => {
    try {
      const personData = req.body;
      const result = await personService.insertPerson(personData);

      res.json({ message: 'Persona insertada correctamente', insertedId: result.insertId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error en el servidor' });
    }
  });

  // Metodo para actualizar persons
  router.patch('/persons/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;
      const result = await personService.updatePerson(id, updatedData);

      if (result.affectedRows > 0) {
        res.json({ message: 'Persona actualizada correctamente' });
      } else {
        res.status(404).json({ error: 'Persona no encontrada' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error en el servidor' });
    }
  });


});

module.exports = router;

