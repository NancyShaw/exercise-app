const express = require('express');
const { AuthenticateToken } = require('./security');
const model = require('../models/users');

const app = express.Router();

    app
        .get('/', AuthenticateToken, (req, res) => {
            res.send(model.GetAll());
        })
        .get('/:user_id', AuthenticateToken, (req, res) => {
            res.send( model.GetById( req.params.user_id ) );
        })
        .post('/register', (req, res, next)=> {
            model.Register(req.body)
            .then(user=> res.send( user ))
            .catch(next);
        })
        .post('/login', (req, res, next)=> {
            model.Login(req.body.email, req.body.password)
            .then(user=> res.send( user ))
            .catch(next);
        })
        .patch('/:user_id', AuthenticateToken, (req, res)=> {
            res.send( model.Update(req.params.user_id, req.body) )
        })

module.exports = app;        