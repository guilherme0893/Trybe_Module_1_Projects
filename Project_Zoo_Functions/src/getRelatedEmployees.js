const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}
// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    // a função só segue caso a isManager assuma um valor de true
    const relatedEmployess = employees.filter((employee2) =>
      employee2.managers.includes(managerId));
    // por usar o map ele já retorna um array, logo não é necessario criar uma constante para ser abastecida
    return relatedEmployess.map((relatedEmployee) =>
      `${relatedEmployee.firstName} ${relatedEmployee.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
module.exports = { isManager, getRelatedEmployees };
