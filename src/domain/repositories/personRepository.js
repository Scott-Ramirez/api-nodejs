const mysql = require('mysql');


class PersonRepository {
  constructor(connection) {
    this.connection = connection;
  }

  // Aquí puedes definir los métodos para realizar operaciones en la base de datos
  async getAllPersons() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM personas';
      this.connection.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
  // ==============================================================================

  // Método para ejecutar una consulta en la base de datos
  // async executeQuery(query) {
  //   return new Promise((resolve, reject) => {
  //     this.connection.query(query, (error, results) => {
  //       if (error) {
  //         reject(error);
  //       } else {
  //         resolve(results);
  //       }
  //     });
  //   });
  // }



  // Aquí puedes definir los métodos para realizar operaciones en la base de datos
  async getPersonById(id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM personas WHERE id=${id}`;
      this.connection.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  // Metodo para eliminar personas
  async deletePersonById(id) {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM personas WHERE id=${id}`;
      this.connection.query(query, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  // Metodos para insertar personas
  async insertPerson(personData) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO personas SET ?';
      this.connection.query(query, personData, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  // Metodo para actualizar persons
  async updatePerson(id, updatedData) {
    return new Promise((resolve, reject) => {
      const query = 'UPDATE personas SET ? WHERE id = ?';
      this.connection.query(query, [updatedData, id], (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }


}

module.exports = PersonRepository;
