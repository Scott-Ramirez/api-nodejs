const PersonRepository = require('../../domain/repositories/personRepository');
const PersonEntity = require('../../domain/entities/personEntity');


class PersonService {
  constructor(personRepository) {
    this.personRepository = personRepository;
  }

  // Aquí podemos definir los métodos para implementar la lógica de negocio relacionada con las personas

  // Por ejemplo, podemos implementar un método para obtener todas las personas
  async getAllPersons() {
    try {
      const persons = await this.personRepository.getAllPersons();
      return persons;
    } catch (error) {
      throw new Error('Error al listar las personas: ' + error.message);
    }
  }
  // ==============================================================================

  // Método para obtener personas paginadas
  // async getPersonsPaginated(offset, limit) {
  //   try {
  //     const query = `SELECT * FROM personas LIMIT ${limit} OFFSET ${offset}`;
  //     const persons = await this.personRepository.executeQuery(query);
  //     return persons;
  //   } catch (error) {
  //     throw new Error('Error al obtener las personas: ' + error.message);
  //   }
  // }



  // Metodo para obtener persons por ID
  async getPersonById(id) {
    try {
      const persons = await this.personRepository.getPersonById(id);
      return persons;
    } catch (error) {
      throw new Error('Error al obtener la personas: ' + error.message);
    }
  }
  // Metodo para eliminar una persona
  async deletePersonById(id) {
    try {
      const result = await this.personRepository.deletePersonById(id);
      return result;
    } catch (error) {
      throw new Error('Error al eliminar la persona: ' + error.message);
    }
  }

  // Metodo para insertar un registro 
  async insertPerson(personData) {
    try {
      const result = await this.personRepository.insertPerson(personData);
      return result;
    } catch (error) {
      throw new Error('Error al insertar la persona: ' + error.message);
    }
  }

  // Metodo para actualizar persons
  async updatePerson(id, updatedData) {
    try {
      const result = await this.personRepository.updatePerson(id, updatedData);
      return result;
    } catch (error) {
      throw new Error('Error al actualizar la persona: ' + error.message);
    }
  }


}

module.exports = PersonService;

