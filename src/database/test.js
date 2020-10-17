const Database = require("./db");
const createProffy = require('./createProffy')

Database.then(async(db) => {
  //Inserir Dados
  proffyValue = {
    name: "Diego Oliveira",
    avatar:
      "https://avatars3.githubusercontent.com/u/54894831?s=460&u=12bb0efe56ec5dd0fff8364fdcd94f7905c86d8f&v=4",
    whatsapp: "11 98765-4321",
    bio:
      "Estudante de Análise e Desenvolvimento de Sistemas, desenvolvedor front-end freelancer e designer freelancer."
  };

  classValue = {
    subject: "Logica de Programação",
    cost: "20,00"
  };

  classScheduleValues = [
    {
      weekday: 1,
      time_from: 720,
      time_to: 1200
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220
    },
  ];

 await createProffy(db, {proffyValue,classValue,classScheduleValues})

  // Consultar Dados
});
