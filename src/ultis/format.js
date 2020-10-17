//Dados
const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",
  "Programação",
];

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

//Funcionalidades

function getSubject(subjectNumber){
  const arrayPosition = +subjectNumber + 1
  return subjects[arrayPosition]
}

function convertHoursToMinutes (time) {
  const [hour, minute] = time.split(':')
  return Number((hour * 60) + minute)
}

module.exports = {
  subjects,
  weekdays,
  getSubject,
  convertHoursToMinutes
}