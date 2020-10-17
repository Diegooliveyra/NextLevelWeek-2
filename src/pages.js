const Database = require("./database/db");

const { subjects, weekdays, getSubject, convertHoursToMinutes } = require("./ultis/format");

function pageLanding(req, res) {
  return res.render("index.html");
}

async function pageStudy(req, res) {
  const filters = req.query;

  if(!filters.subject || !filters.weekday || !filters.time) {

    return res.render("study.html", {filters, subjects, weekdays });
  }

  //formatando horas para minutos
const timeToMinutes = convertHoursToMinutes(filters.time)


  const query = `
    SELECT classes.*,proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE EXISTS (
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = class_id
        AND class_schedule.weekday = ${filters.weekday}
        AND class_schedule.time_from <= ${timeToMinutes}
        AND class_schedule.time_to > ${timeToMinutes}
    ) 
    AND classes.subject = ${filters.subject};
`;

//Caso haja erro no busca do banco de dados
      try {
        const db = await Database;
        const proffys = await db.all(query)

        return res.render('study.html', {proffys, subjects, filters, weekdays})
      } catch (error) {
        console.log('error')
      }
}

function pageGiveClasses(req, res) {
  const data = req.query;
  const isNotEmpy = Object.keys(data).length != 0;

  if (isNotEmpy) {
    console.log("entrei");
    //pegando o nome do subjets
    data.subject = getSubject(data.subject);
    //adcionar dados a lista de proffs
    proffys.push(data);
    return res.redirect("/study");
  }

  //se não, mostrar a pagina
  return res.render("give-classes.html", { subjects, weekdays });
}

module.exports = {
  pageLanding,
  pageStudy,
  pageGiveClasses,
};
