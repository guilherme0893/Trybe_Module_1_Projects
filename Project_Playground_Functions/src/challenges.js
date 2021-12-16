// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
	// && = ambos necessariamente são true
	return true;
		// true e false, false e true, false e false -> outras possibilidades para ser false
	} 
	return false;
}
const c = true;
const d = false;
const e = true;
const f = false;
console.log(compareTrue(d, c));
console.log(compareTrue(c, f));
console.log(compareTrue(c, e));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
	return area;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
let palavra = 'go Trybe';
let palavra2 = 'vamo que vamo';
let palavra3 = 'foguete';

function splitSentence(palavras) {
  // criar um array vazio para receber as letras
  // let resultado = [];
  // tentativa de separar usando split (como no exercicio -- ok) e dando push (fail) disso no array;
  let separado = palavras.split(' ');
  // com [string] fica um array dentro de array
  return separado;
}

console.log(splitSentence(palavra));
console.log(splitSentence(palavra2));
console.log(splitSentence(palavra3));

// Desafio 4
function concatName(array) {
	// último e primeiro item => array.lenght -1 e array[0];  
	// aplicar o for para percorrer os elementos do array
	for (let i = 0; i <= array.length; i += 1) {
	} 
	return array[array.length - 1] + ', ' + array[0];  
};

let array1 = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(array1));
let array2 = ['foguete', 'não', 'tem', 'ré'];
console.log(concatName(array2));
let array3 = ['captain', 'my', 'captain'];
console.log(concatName(array3));

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins;
  let empate = ties;
  let pontuacao = (vitoria * 3) + (empate * 1);
  return pontuacao;
}

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
let numeroMax = array[0];
let contador = 0;
    for (let index = 1; index <= array.length; index += 1) {
        if (array[index] > numeroMax) {
        numeroMax = array[index];
    }
}	    for (let i = 0; i <= array.length -1; i += 1) {
        if (numeroMax === array[i]) {
		contador = contador + 1;
	}
}
    return contador;
}
    
let array4 = [9, 1, 2, 3, 9, 5, 7];
console.log(highestCount(array4));
let arrayA = [0, 4, 4, 4, 9, 2, 1];
console.log(highestCount(arrayA));
let arrayB = [0, 0, 0];
console.log(highestCount(arrayB));

// Desafio 7
function catAndMouse(rato, gato1, gato2) {
let resultado = [''];
// animais em linha -> pensar num eixo X e distancia de pontos -- movimento (subtração) poderá ser negativa a depender do rato
let distanciaRatoGato1 = (rato - gato1);
let distanciaRatoGato2 = (rato - gato2);
	if (distanciaRatoGato1 < 0) {
		distanciaRatoGato1 = distanciaRatoGato1 * -1;
  } else if (distanciaRatoGato2 < 0);{
    distanciaRatoGato2 = distanciaRatoGato2 * -1;
  }
  if (distanciaRatoGato1 > distanciaRatoGato2) {
	  resultado = 'cat2';
	} else if (distanciaRatoGato2 > distanciaRatoGato1) {
		resultado = 'cat1';
	} else if (distanciaRatoGato1 === distanciaRatoGato2) {
	// se rato esta em 1 e gato em 0 é um espaço de distancia, e se o gato2 esta em 2 tb é um espaço de distancia
		resultado = 'os gatos trombam e o rato foge';
  }
	return resultado;
}

console.log(catAndMouse(1, 3, 2));
console.log(catAndMouse(1, 6, 12));
console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(numeros) {
// variavel array fora da function para receber as respostas
let resposta = [];
	for (let i = 0; i < numeros.length; i += 1){
	if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
	resposta.push('fizzBuzz');
} else if (numeros[i] % 3 === 0){
	resposta.push('fizz');
} else if (numeros[i] % 5 === 0){
	resposta.push('buzz');
} else {
	resposta.push('bug!');
}
	}
	return resposta;
}

let array5 = [2, 15, 7, 9, 45];
console.log(fizzBuzz(array5));
let array6 = [7, 9];
console.log(fizzBuzz(array6));
let array7 = [9, 25];
console.log(fizzBuzz(array7));

// Desafio 9
function encode(string) {
// let palavras = string;
let separacao = string.split('');
	for (let i = 0; i < separacao.length; i += 1) {
		if (separacao[i] === 'a') {
		separacao[i] = '1';
	} else if (separacao[i] === 'e') {
		separacao[i] = '2';
	} else if (separacao[i] === 'i') {
		separacao[i] = '3';
	} else if (separacao[i] === "o") {
		separacao[i] = '4';
	} else if (separacao[i] === 'u') {
		separacao[i] = '5';
	} else {
		separacao[i] = separacao[i];
	} 
	} 
	let palavraNova = separacao.join('');
	return palavraNova;
}

let teste = 'hi there!';
console.log(encode(teste));
	
function decode(string) {
let separacao = string.split('');
	for (let i = 0; i < separacao.length; i += 1) {
		if (separacao[i] === '1'){
			separacao[i] = 'a';
		} else if (separacao[i] === '2') {
			separacao[i] = 'e';
		} else if (separacao[i] === '3') {
			separacao[i] = 'i';
		} else if (separacao[i] === '4') {
			separacao[i] = 'o';
		} else if (separacao[i] === '5') {
			separacao[i] = 'u';
		} else {
			separacao[i] = separacao[i];
		}
	} let palavraOriginal = separacao.join('');
		return palavraOriginal;
}
	
let teste2 = 'h3 th2r2!';
console.log(decode(teste2));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
