const data = require('../data/zoo_data');

// OBJETO ESPERADO SE INDICAR O DIA
// dia: { ---> vai receber uma função que pega o nome do dia ?
// horario:, ---> funcao que cria um template literals pegando o dia CHECK
// animal:, ---> funcao que pega os animais presentes no dia CHECK
// }

// DESESTRUTURAÇÃO DO ARRAY
const { species, hours } = data;
// CONST COM OS DIAS DA SEMANA
const daysOfTheWeek = Object.keys(hours);
// CONST COM OS ANIMAIS
const allAnimalSpecies = species.map((specie) => specie.name);

// FUNCAO QUE CRIA OS ANIMAIS EXIBIDOS DURANTE UM DETERMINADO DIA
// filter com include retorna um objeto
const getAnimalAvailablePerDay = (weekDay) => {
  // o filter com includes devolve um array com objetos que sao transformados num array através do map
  const specieFiltered = species.filter((specie) => specie.availability.includes(weekDay));
  return specieFiltered.map((animal) => animal.name);
};
// console.log(getAnimalAvailablePerDay('Sunday'));

// FUNCAO QUE CRIA A DISPONIBILIDADE -- OS DIAS -- DO ANIMAL --> CONDIÇÃO PASSANDO APENAS O ANIMAL
const gettingAnimalOnly = (animalName) => {
  // usar apenas o find para retornar um objeto, com o map esta saindo um arra dentro de array
  const filteredAnimalsOnly = species.find((specie) => specie.name === animalName);
  // return filteredAnimalsOnly.map((disponibilidade) => disponibilidade.availability);}
  // com o find retorna um objeto e os valores das chaves podem ser acessados
  return filteredAnimalsOnly.availability;
};
// console.log(gettingAnimalOnly('lions'));

// FUNCAO QUE CRIA O TEMPLATE LITERALS
const createOfficeHour = (weekDay) => {
  const { open, close } = hours[weekDay];
  if (weekDay === 'Monday') {
    return 'CLOSED';
  }
  return `Open from ${open}am until ${close}pm`;
};
// console.log(createOfficeHour('Sunday'));

// FUNCAO QUE CRIA TODOS OS DIAS AO MESMO TEMPO
const getScheduleForAllDays = () => {
  const arrayOfDays = ['Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday', 'Sunday', 'Monday'];
  const allDaysObject = {};
  arrayOfDays.forEach((day) => {
    if (day !== 'Monday') {
      allDaysObject[day] = {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: getAnimalAvailablePerDay(day),
      };
    } else {
      allDaysObject[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
  });
  return allDaysObject;
};
// console.log(getScheduleForAllDays());

// FUNCAO QUE CRIA O DIA E HORARIO DO OBJETO --> CONDIÇÃO PASSANDO O DIA DA SEMANA
const getScheduleOfTheDay = (dayWeek) => {
  if (dayWeek === 'Monday') {
    return {
      // retorn um par key : value, onde o value é um outro objeto
      Monday: {
        officeHour: createOfficeHour(dayWeek),
        exhibition: 'The zoo will be closed!',
      },
    };
  } return {
    [dayWeek]: {
      officeHour: createOfficeHour(dayWeek),
      exhibition: getAnimalAvailablePerDay(dayWeek),
    },
  };
};
// console.log(getScheduleOfTheDay('Sunday'));

function getSchedule(scheduleTarget) {
  if (daysOfTheWeek.find((dia) => dia === scheduleTarget)) {
    return getScheduleOfTheDay(scheduleTarget);
  }
  if (allAnimalSpecies.find((specie) => specie === scheduleTarget)) {
    return gettingAnimalOnly(scheduleTarget);
  }
  if (scheduleTarget === undefined) {
    return getScheduleForAllDays();
  }
  return getScheduleForAllDays();
}
console.log(getSchedule('Sunday'));
console.log(getSchedule('lions'));
const teste = getSchedule();
console.log(Object.keys(teste));
console.log(Object.values(teste));

module.exports = getSchedule;
