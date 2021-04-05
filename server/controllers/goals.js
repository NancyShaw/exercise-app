const express = require('express');
const model = require('../models/goals');

const app = express.Router();

app
        .get('/', (req, res) => {
            res.send(model.GetAll());
        })
        .get('/:user_id', (req, res)=> res.send( model.GetByUserId( req.params.user_id ) ))
        .post('/:user_id', (req, res)=> {
            res.send( model.Add( req.params.user_id, req.body) );
        })
        .patch('/user_id', (req, res)=> {
            res.send( model.UpdateDaily( req.params.user_id, req.body) );
        })
        

module.exports = app;