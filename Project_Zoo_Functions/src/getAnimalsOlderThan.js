const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // usa o find para checar se o animal existe, e se existir guarda numa constante
  // o every busca se todos os elementos presentes satisfazem tal condição
  const choosenAnimal = species.find((requiredAnimal) => requiredAnimal.name === animal);
  return choosenAnimal.residents.every((animalAge) => animalAge.age > age);
}
console.log(getAnimalsOlderThan('tigers', 1));

module.exports = getAnimalsOlderThan;
