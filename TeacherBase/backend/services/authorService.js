var express = require('express');
var router = express.Router();

var Author = require('../models/author')
var user = require('./userService')

router.post('', user.checkAuthenticated, (request, response) => {
    var author = new Author(request.body);
    author.save((error, result) => {
        if (error) {
            console.log(error)
            return response.sendStatus(500).send({message: error});
        }
        return response.sendStatus(201);
    });
});

router.get('', user.checkAuthenticated, async (request, response) => {
    var authors = await Author.find({}, '-__v');
    response.send(authors);
});

var author = {router}

module.exports = author
