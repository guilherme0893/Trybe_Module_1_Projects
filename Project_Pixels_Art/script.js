// iniciado apos o grupo de estudos onde o Humberto Castro repassou os requisitos
// maior parte dos comentários se refere às anotações desse dia

function selectColor() {
  // tentativa de fazer o paintPixel() funcionar já que as cores do CSS ficaram não selecionáveis -- pq? --
  const colorPalette = document.querySelectorAll('.color');
  const colorArray = ['blue', 'yellow', 'green', 'pink', 'red'];
  for (let index = 0; index < colorPalette.length; index += 1) {
  // Indicado pelo Humberto e confirmado seguindo o link
  // selecionar posição dentro do array a partir de uma variavel
  // seguindo o método presente no link usando o randon e floor
  // https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
    const colorArrayIndex = Math.floor(Math.random() * colorArray.length);
    colorPalette[index].style.backgroundColor = colorArray[colorArrayIndex];
    // removendo a primeira para não repetir
    colorArray.splice(colorArrayIndex, 1);
  }
  // fixar a preta como primeira cor
  colorPalette[0].style.backgroundColor = 'black';
}
selectColor();

function clearBoard() {
  let pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

function createEventClearBoard() {
  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', clearBoard);
}
createEventClearBoard();

function removePixelBoard() {
  // pegar filhos (as divs) do pixel board antes para então deletar os filhos da div (li)
  const pixelBoardDiv = document.querySelectorAll('#pixel-board > div');
  for (let index = 0; index < pixelBoardDiv.length; index += 1) {
    // erro:Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.
    // então add o parentNode para acesso ao node pai dps o filho eo filho do filho (li) -- acho que é isso, check
    pixelBoardDiv[index].parentElement.removeChild(pixelBoardDiv[index]);
  }
}

function createBoard() {
  // necessario remover os divs e lis criados anteriormente
  removePixelBoard();
  // removeu e agora cria o quadro conforme os dados do input
  // variavel que recebe o valor inserido no input
  const inputValue = document.getElementById('board-size').value;
  // variavel que recebe o elemento main, onde estará o pixel board
  const pixelBoard = document.getElementById('pixel-board');
  for (let index = 0; index < inputValue; index += 1) {
    // criar as divs a partir do numero do input -- as divs sao filhas do main --> pixel board
    const divs = document.createElement('div');
    // criar os li filhos das divs pai; se sao X divs sao X filhos
    for (let i = 0; i < inputValue; i += 1) {
      const li = document.createElement('li');
      // precisam ter a classe pixel pq serão pintadas depois
      li.className = 'pixel';
      divs.appendChild(li);
    }
    // adicionar as divs com li no main
    pixelBoard.appendChild(divs);
  }
  // chamar função para add event ao pixel
  createEventPaint();
}

function createEventCreateBoard() {
  const createButton = document.getElementById('generate-board');
  createButton.addEventListener('click', createBoard);
}
createEventCreateBoard();

function createEventSelected() {
  const colorElements = document.querySelectorAll('.color');
  for (let index = 0; index < colorElements.length; index += 1) {
    colorElements[index].addEventListener('click', function(event) {
      // função como a do exercicio add e remove class tech
      const colorElements = document.querySelectorAll('.color');
      // remove a class selected
        for (let i = 0; i < colorElements.length; i += 1) {
        colorElements[i].classList.remove('selected');
      }
      event.target.classList.add('selected');
    }
  )}
}
createEventSelected();

function paintPixel(event) {
  const paletteElement = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = paletteElement;
}

function createEventPaint() {
  // chamar todos que sao pixel --> li
  const li = document.querySelectorAll('.pixel');
  for (let index = 0; index < li.length; index += 1) {
    li[index].addEventListener('click', paintPixel);
  }
}
createEventPaint();

function checkValueInput() {
  // vai checar o valor do input e as condições
  // mas primeiro precisa limpar
  const inputValue = document.querySelector('#board-size').value;
  if (inputValue === 0 || inputValue === '') {
    window.alert('Board inválido!');
  } else if (inputValue > 50) {
    window.alert('Insira valores entre 5 e 50');
  } else {
    createBoard();
  }
  document.querySelector('#board-size').value = '';
}

// engatilhar o evento de check junto do create board quando clicar no botão VQV
function createCheckValueEvent() {
  const createButton = document.getElementById('generate-board');
  createButton.addEventListener('click', checkValueInput);
}
createCheckValueEvent();
