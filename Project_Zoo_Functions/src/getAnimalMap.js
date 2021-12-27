const data = require('../data/zoo_data');

// retorna um objeto com os pontos colaterais de keys e os animais nos values -- logo são 04
// importante notar que em todos os teste SEMPRE há os PONTOS COLATERAIS (sempre key) e as ESPECIES (key ou value)
// {
//   NE : [array],
//   NW : [array],
//   SE : [array],
//   SW : [array],
// }

// desestruturação do objeto
// const { species } = data;

// FUNCAO QUE RETORNA OS ANIMAIS NOS PONTOS
const getAnimalFromLocation = (position) => {
  const animalByLocation = data.species.filter((specie) => specie.location.includes(position));
  // map no objeto retornado para pegar os animais
  return animalByLocation.map((animal) => animal.name)
}
// OBJETO A SER RETORNADO QUANDO PARAMETRO FOR VAZIO -- TODOS OS ANIMAIS
const animalsObject = {
  NE: getAnimalFromLocation('NE'),
  NW: getAnimalFromLocation('NW'),
  SE: getAnimalFromLocation('SE'),
  SW: getAnimalFromLocation('SW'),
}
// console.log(animalsObject);

// código com feito com base no da Fumagalli, com destaque para o uso da desestruturação
// a ideia é o filterOptions conter as condições pedidas nos testes
const filteredAnimalObject = (animal, options) => {
  const { sex, sorted } = options;
  // console.log(sex) e console.log(sorted) retornam undefined
  const { residents } = data.species.find(({ name }) => name === animal);
  // console.log(residents);
  // ----> retorna todos os animais residentes
  const residentAnimals = {
    // objeto novo com o parametro animal como chave, e o map como valor;
    [animal]: residents.map(({ name }) => name),
  };
  // isso equivale a 'se sex for defined no objeto' assim é possível filtrar com base 
  if (sex) {
    const sexFiltedArray = residents.filter((resident) => resident.sex === sex);
    residentAnimals[animal] = sexFiltedArray.map(({ name }) => name);
  }
  if (sorted) {
    residentAnimals[animal].sort();
  }
  return residentAnimals;
};
// console.log(filteredAnimalObject('lions', 'female'));

function getAnimalMap(options) {
  if (options === undefined || options.includesName === true) {
    return animalsObject
  }
  if (options) {
    return filteredAnimalObject();
  }
}
// console.log(getAnimalMap({ includeNames: true, sex: 'female' }));
console.log(getAnimalMap(options = {includesName: false}));

module.exports = getAnimalMap;
