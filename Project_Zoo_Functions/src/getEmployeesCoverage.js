const data = require('../data/zoo_data');

const { species, employees, hours, prices} = data;

// sem parametro retorna um objetao de todos
  //  {
  //    id --> função que pega o ID
  //    fullname -->  o nome completo via template literals
  //    species --> funcção que pega a especie num array
  //    locations --> função que pega as localizações num array
  //  }

function getEmployeesCoverage() {
  
  
  // com apenas o name retorna APENAS um objeto

  // com apenas o lastname retorna APENAS um objeto

  // com apenas o ID no parametro --> objeto como o de cima mas apenas UM

  // caso id ou nomes invalidos
  // else throw error ---> ULTIMA COISA


}

module.exports = getEmployeesCoverage;
