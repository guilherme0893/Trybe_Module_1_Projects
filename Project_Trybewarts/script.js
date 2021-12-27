const buttonLogin = document.querySelector('#login');
const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#senha');
const selectHouse = document.querySelector('select');
const checkbox = document.querySelector('#agreement');
const buttonSubmit = document.querySelector('#submit-btn');

function validateForm() {
  buttonLogin.addEventListener('click', () => {
    if (inputEmail.value && inputSenha.value !== null) {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
} validateForm();

function houses() {
  const optionsHouse = ['Gitnória', 'Reactpuff', 'Corvinode', 'Pytherina'];
  const housesId = ['gitnoria-house', 'reactpuff-house', 'corvinode-house', 'pytherina-house'];

  for (let i = 0; i < optionsHouse.length; i += 1) {
    const option = document.createElement('option');
    option.innerText = optionsHouse[i];
    option.id = housesId[i];
    selectHouse.appendChild(option);
  }
} houses();

// requisito 18
// fontes para consulta
// sobre o checked: https://www.w3schools.com/jsref/prop_checkbox_checked.asp
// sobre o check e if juntos: https://www.guj.com.br/t/habilitar-campo-quando-checkbox-e-selecionado-resolvido/198756
// sobre o corpo da função: https://www.horadecodar.com.br/2020/11/17/como-habilitar-um-botao-apenas-quando-os-inputs-estiverem-preenchidos/

function verifyAgreement() {
  // função de click no checkbox
  checkbox.addEventListener('click', () => {
    if (checkbox.checked === false) {
      buttonSubmit.disabled = true;
    } else {
      buttonSubmit.disabled = false;
    }
  });
} verifyAgreement();
