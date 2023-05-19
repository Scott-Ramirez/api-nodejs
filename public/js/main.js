const tableBody = document.getElementById('person-table-body');

fetch('http://localhost:3001/persons?page=1&pageSize=10')
  .then(response => response.json())
  .then(data => {
    // Recorrer los datos y generar filas en la tabla
    data.forEach(person => {
      const row = document.createElement('tr');
      row.innerHTML = `
                <td>${person.id}</td>
                <td>${person.nombre}</td>
                <td>${person.apellido}</td>
                <td>${person.dni}</td>
                <td>${person.edad}</td>
                <td>${person.direccion}</td>
                <td>${person.profesion}</td>
                
            `;
      tableBody.appendChild(row);
    });
  })
  .catch(error => console.error(error));




// FUNCION PARA LA PAGINATION 