const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const filteredEmployee = data.employees.find((employeeId) => employeeId.id === id);
  // chama o animal na posição 0 - primeiro - que esta dentro da responsabilidade do employee
  const animalList = data.species.find((animal) =>
    animal.id === (filteredEmployee.responsibleFor[0]));
  // salva os animais residentes
  const residentAnimals = animalList.residents;
  // o residentAnimals cria um array com objetos, o map vai trazer um array com as idades
  const animalAges = residentAnimals.map((animalAge) => animalAge.age);
  // para pegar a posição do maior numero pode-se usar o indexOf, que é para arrays
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
  const oldestAnimalIndex = animalAges.indexOf(Math.max(...animalAges));
  // retorna  um novo array com os dados => array = [ nome, sexo, idade]
  const oldestAnimalArrayInfo = [residentAnimals[oldestAnimalIndex].name,
    residentAnimals[oldestAnimalIndex].sex, residentAnimals[oldestAnimalIndex].age];
  return oldestAnimalArrayInfo;
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
