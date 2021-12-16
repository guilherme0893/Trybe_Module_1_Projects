const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    // criar uma variável foi baseado na monitoria do Caique, já o uso do arrayContaining veio da documentação
    // https://jestjs.io/pt-BR/docs/expect#expectarraycontainingarray
    let functionReturn = console.log(productDetails)
    expect.arrayContaining(functionReturn)
    // ideia parecida com a de cima
    // Teste se o array retornado pela função contém dois itens dentro.
    let functionReturnObject = productDetails()
    expect(functionReturnObject.length).toBe(2)
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Linha feita durante a sala de estudo do Huberto Castro
    // tentar criar algo mais simples 
    if (typeof functionReturnObject[0] === 'object' && typeof functionReturnObject[1] === 'object') {
      boolean = true;
    }
    expect(boolean).toBe(true);
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Linha feita durante a sala de estudo do Humberto Castro
    expect(functionReturnObject[0] !== functionReturnObject[1]).toBe(true);
    // Teste se os dois productIds terminam com 123.
    // linha feita na sala de estudo do Humberto Castro
    // observar como o value é localizado através dos pontos
    // partindo do princípio que haverá 123 no final -- faz um slice para com negativo para recuperar as ultima tres letras
    let elemento1 = functionReturnObject[0].details.productId.slice(-3);
    let elemento2 = functionReturnObject[1].details.productId.slice(-3);
    expect(elemento1 && elemento2).toBe('123')
  });
});
