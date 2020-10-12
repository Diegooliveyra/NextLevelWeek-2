const express = require("express")
const server = express()
server.use(express.static('public'))
  .get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
  })
  .get("/study", (req, res) => {
    res.sendFile(__dirname + "/views/study.html");
  })
  .get("/give-classes", (req, res) => {
    res.sendFile(__dirname + "/views/give-classes.html");
  })
  .listen(5800);