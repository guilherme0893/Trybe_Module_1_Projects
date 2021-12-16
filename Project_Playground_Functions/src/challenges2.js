// Desafio 10
function techList(techs, name) {
	let techsSorted = techs.sort();
	let array = [];
  if (techs.length === 0) {
		return 'Vazio!';
	} {
		for (let index = 0; index < techsSorted.length; index += 1) {
			let elemento = {
				tech: techsSorted[index],
				name: name,
			};
			array.push(elemento);
		}
	};
	return array;
};
  
let arrayTecnologia2 = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
console.log(techList(arrayTecnologia2, 'Lucas'));
let arrayTecnologia = [];console.log(techList(arrayTecnologia, 'Lucas'));

// Desafio 11
function generatePhoneNumber() {

}

// Desafio 12
function triangleCheck(lado1, lado2, lado3) {
	let condição1 = lado1 < lado2 + lado3 && 
		lado2 < lado1 + lado3 && lado3 < lado1 + lado2;
	let condição2 = lado1 > Math.abs(lado2 - lado3) && 
		lado2 > Math.abs(lado1 - lado3) && lado3 > Math.abs(lado1 - lado2);
	if (condição1 === true && condição2 === true) {
		return true
	} return false;
}
console.log(triangleCheck(10, 14, 8));
console.log(triangleCheck(2, 3, 4));
console.log(triangleCheck(16, 20, 30));

// Desafio 13
function hydrate(string) {
	// uso do regex foi tirado da seguinte fonte
	// https://stackoverflow.com/questions/2555059/javascript-regular-expressions-replace-non-numeric-characters
  let contagem = string.match(/[1-9]+/g);
  let contadorBedidas = 0;

  for (let i = 0; i < contagem.length; i += 1) {
    contadorBedidas = contadorBedidas + parseInt(contagem[i]);
  }
  if (contadorBedidas === 1) {
    return '1 copo de água';
  }
    return contadorBedidas + ' copos de água';
}

console.log(hydrate('1 cerveja'));
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));
console.log(hydrate('2 shots de tequila, 2 cervejas e 1 corote'));
console.log(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho'));
console.log(hydrate('4 caipirinhas e 2 cervejas'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
