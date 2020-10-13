var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var cors = require("cors") // handshake için. "npm install cors" ile backende kurulur
var Author = require('./models/author')
var User = require('./models/user')

// Servisler
var author = require("./services/authorService")
var user = require("./services/userService")

var app = express()

app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://samed:12345@teacherbase.4loj3.mongodb.net/teacherbase?retryWrites=true&w=majority', (error)=>{
    if(!error){
        console.log("Connected to db")
    }
})

app.use('/author',author.router)
app.use('/user',user.router)

app.listen(8080)
