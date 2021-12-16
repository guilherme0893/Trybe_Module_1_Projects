/*
  Dada uma função chamada createStudent que recebe como parâmetro um nome,
  retorne um objeto que contenha duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Faça a função da chave feedback com arrow functions!

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/

const createStudent = (nameStudant) => {
  // requisito feito durante a monitoria com Caique -- houve a dica de como fazer quando houver variaveis dos mesmos nomes, mas segui a ideia original de usar diferentes nomes
  // cria elemento do tipo objeto com duas keys, uma sendo a string recebida e a outra uma arrow function
  let estudante = {
    name: nameStudant,
    feedback: () => 'Eita pessoa boa!',
  };
  // const feedback = () => {
  //   return 'Eita pessoa boa!'
  // }
  return estudante;
};

module.exports = createStudent;
