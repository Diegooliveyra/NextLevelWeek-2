//Dados
const proffys = [
  {
    name: "Diego Oliveira",
    avatar:
      "https://avatars3.githubusercontent.com/u/54894831?s=460&u=12bb0efe56ec5dd0fff8364fdcd94f7905c86d8f&v=4",
    whatsapp: "11 98765-4321",
    bio:
      "Estudante de Análise e Desenvolvimento de Sistemas, desenvolvedor front-end freelancer e designer freelancer.",
    subject: "Logica de Programação",
    cost: "20,00",
    weekday: [0],
    time_from: [720],
    time_to: [1220],
  },
  {
    name: "Diego Brito",
    avatar:
      "https://avatars3.githubusercontent.com/u/54894831?s=460&u=12bb0efe56ec5dd0fff8364fdcd94f7905c86d8f&v=4",
    whatsapp: "11 98765-4321",
    bio:
      "Estudante de Análise e Desenvolvimento de Sistemas, desenvolvedor front-end freelancer e designer freelancer.",
    subject: "Logica de Computação",
    cost: "40",
    weekday: [1],
    time_from: [720],
    time_to: [1220],
  },
];

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
function pageLanding(req, res) {
  return res.render("index.html");
}

function pageStudy(req, res) {
  const filters = req.query;
  return res.render("study.html", { proffys, filters, subjects, weekdays });
}

function pageGiveClasses(req, res) {
  return res.render("give-classes.html");
}


//Servidor
const express = require("express");
const server = express();


//Configurar Nunjucks(tamplate engine)
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

//inicio e configuração do servidor
server
  //configurar arquivos estaticos(css,imgens e scripts)
  .use(express.static("public"))
  //rotas das aplicações
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .listen(5800);
