const express = require('express');
const { AuthenticateToken } = require('./security');
const model = require('../models/users');

const app = express.Router();

    app
        .get('/', AuthenticateToken, (req, res) => {
            res.send(model.GetAll());
        })
        .post('/register', (req, res, next)=> {
            console.log(req);
            model.Register(req.body)
            .then(user=> res.send( user ))
            .catch(next);
        })
        .post('/login', (req, res, next)=> {
            model.Login(req.body.email, req.body.password)
            .then(user=> res.send( user ))
            .catch(next);
        })

module.exports = app;        