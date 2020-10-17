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
    subject: 1,
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

// await createProffy(db, {proffyValue,classValue,classScheduleValues})

  // Consultar Dados

  //todos os proffs
  const selectedProffys = await db.all("SELECT * FROM proffys")

  //consultar as classe de um determinado professor
  //e trazer junto os dados do professor
  const selectedClassesAndProffys = await db.all(`
      SELECT classes.*,proffys.*
      FROM proffys
      JOIN classes ON (classes.proffy_id = proffys.id)
      WHERE classes.proffy_id = "1"
  `)

  console.log(selectedClassesAndProffys)

  const selectClassesShedule = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "520"
    AND class_schedule.time_to > "520"
  `)

  console.log(selectClassesShedule)
});
