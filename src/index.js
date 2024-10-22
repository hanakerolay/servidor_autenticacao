//Importaçao da bibliotecas
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const db = require('./database')

// Constroi o servidor
const server =  express()
server.use(cors())
server.use(bodyParser.json())
server.use(cookieParser())

// Direciona para página de login
server.get("/", (req, res) => res.sendFile(__dirname+"/pages/login.html"))
server.get("/home", (req, res) => res.sendFile(__dirname+"/pages/home.html"))


//Coloca a servidor online
server.listen(3333, () => {
    console.log("Servidor online na porta 3333")
})




