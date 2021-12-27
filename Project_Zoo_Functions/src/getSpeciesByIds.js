const { species } = require('../data/zoo_data');
// console.log(species)
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const filteredAnimals = [];
  species.forEach((specie) => {
    ids.forEach((id) => {
      if (specie.id === id) {
        filteredAnimals.push(specie);
      }
    });
  });
  return filteredAnimals;
}

module.exports = getSpeciesByIds;
