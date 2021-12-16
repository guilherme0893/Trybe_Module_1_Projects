const styleArray = ['newspaper', 'magazine1', 'magazine2'];
const sizeArray = ['medium', 'big', 'reallybig'];
const rotateArray = [`rotateleft`, `rotateright`];
const inclineArray = [`skewleft`, `skewright` ];

// só pode haver uma das opções dentro do grupo de quatro 
function pickRandonStyle() {
  const randonPickStyle = styleArray[Math.floor(Math.random() * styleArray.length)];
	return randonPickStyle;
};

function pickRandonSize() {
	const randonPickSize = sizeArray[Math.floor(Math.random() * sizeArray.length)];
	return randonPickSize;
};

function pickRandonRotate() {
	const randonPickRotate = rotateArray[Math.floor(Math.random() * rotateArray.length)];
	return randonPickRotate;
};

function pickRandonIncline() {
	const randonPickIncline = inclineArray[Math.floor(Math.random() * inclineArray.length)];
	return randonPickIncline;
};

function createSpanLetter() {
	// chama o p pai do elemento span
  let elementP = document.querySelector('#carta-gerada'); 
	// criar uma variavel que ira receber o texto
	let inputText = document.querySelector('#carta-texto').value;
	// chamar o paragrafo através do inner html e remover potenciais elementos html dele "zerar o p"
	elementP.innerHTML = ' ';
	// separar o input todo em palavras divididas por espaço
	let inputTextSplit = inputText.split(' ');
	for (let index = 0; index < inputTextSplit.length; index +=1) {
		// criar a span que será filho do p
  	let pSpan = document.createElement('span');
		pSpan.classList.add(pickRandonStyle(), pickRandonSize(), pickRandonRotate(), pickRandonIncline());
		pSpan.innerText = inputTextSplit[index];
		// anexa os spans ao p
		elementP.appendChild(pSpan);
	}	
	// vazio é a mesma coisa de length = 0
	if (inputText.length === 0 || inputText === ' ') {
		let textoAviso = 'por favor, digite o conteúdo da carta.';
		elementP.innerText = textoAviso;
	};
	// a função retorna um valor número que será inserido no parágrafo carta-contador
	let contador = document.querySelector('#carta-contador');
	contador.innerHTML = wordCounter();	
};

function eventCreateLetter () {
	const createButton = document.querySelector('#criar-carta');
  createButton.addEventListener('click', createSpanLetter);
}
eventCreateLetter();

function wordCounter() {
	// repetindo linha, mas talvez fosse melhor por tudo para fora como const
	let inputText = document.querySelector('#carta-texto').value;
	return inputText.split(' ').length;
};
