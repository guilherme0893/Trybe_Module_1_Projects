const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const returnedAnimals = {};
    data.species.forEach((specie) => { returnedAnimals[specie.name] = specie.residents.length; });
    return returnedAnimals;
  }
  const { specie, sex } = animal;
  // o sexo do animal pode ser pedido OU não
  if (sex !== undefined) {
    const animalSex = data.species.find((animal2) => animal2.name === specie).residents;
    const animalSexNumber = animalSex.filter((animal3) => animal3.sex === sex).length;
    return animalSexNumber;
  } {
    const getAnimals = data.species.find((animal4) => animal4.name === specie).residents;
    const getTotalAnimals = getAnimals.filter((animal5) => animal5).length;
    return getTotalAnimals;
  }
}
// console.log(countAnimals({ specie: 'bears' }));

module.exports = countAnimals;
