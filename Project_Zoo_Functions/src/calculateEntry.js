const data = require('../data/zoo_data');

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

function countEntrants(entrants) {
  // checando o tamanho ou existencia
  // o uso do isArray foi indicado durante monitoria do Caique
  if (!Array.isArray(entrants)) {
    return 0;
  }
  // filtrando as pessoas que fazem parte do entrants: child, adult, senior
  const childValue = entrants.filter((pessoa) => pessoa.age < 18).length;
  const adultValue = entrants.filter((pessoa) => pessoa.age >= 18 && pessoa.age < 50).length;
  const seniorValue = entrants.filter((pessoa) => pessoa.age >= 50).length;
  // retorna um objeto com as constantes
  return { child: childValue, adult: adultValue, senior: seniorValue };
}
// console.log(countEntrants(entrants));

function calculateEntry(entrants) {
  // acessar o objeto retornado do countEntrants
  const visitors = countEntrants(entrants);
  // checando o entrants
  if (!Array.isArray(entrants)) {
    return 0;
  }
  // criando os preços acesssando os valores no data
  const childPrice = data.prices.child * visitors.child;
  const adultPrice = data.prices.adult * visitors.adult;
  const seniorPrice = data.prices.senior * visitors.senior;
  return childPrice + adultPrice + seniorPrice;
}

module.exports = { calculateEntry, countEntrants };
