//Servidor
const express = require("express");
const server = express();

const { pageLanding, pageStudy, pageGiveClasses } = require("./pages");

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
