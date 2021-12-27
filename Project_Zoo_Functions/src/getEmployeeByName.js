const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName !== undefined) {
    // tentativa de usar o filter falhou, o uso do find serviu para trazer um objeto, conforme indicado também no link abaixo
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    return employees.find((empregado) =>
      empregado.firstName === employeeName || empregado.lastName === employeeName);
  }
  return {};
}

module.exports = getEmployeeByName;
