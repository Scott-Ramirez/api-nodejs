class PersonEntity {
    constructor(id, nombre, edad) {
      this.id = id;
      this.nombre = nombre;
      this.edad = edad;
    }
  
    // Aquí puedes definir getters y setters según las necesidades de tu entidad
  
    getId() {
      return this.id;
    }
  
    setId(id) {
      this.id = id;
    }
  
    getNombre() {
      return this.nombre;
    }
  
    setNombre(nombre) {
      this.nombre = nombre;
    }
  
    getEdad() {
      return this.edad;
    }
  
    setEdad(edad) {
      this.edad = edad;
    }
  }
  
  module.exports = PersonEntity;
  