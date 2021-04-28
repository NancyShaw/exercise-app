const express = require('express');
const model = require('../models/friends');

const app = express.Router();

app
        .get('/:user_id', (req, res)=> res.send( model.GetFriends( req.params.user_id ) ))
        .get('/new/:user_id', (req, res)=> res.send( model.FindFriends( req.params.user_id ) ))
        .post('/:user_id', (req, res)=> {
            res.send( model.AddFriend( req.params.user_id, req.body) );
        })
        .delete('/:user_id', (req, res)=> {
            res.send( model.DeleteFriend( req.params.user_id, req.body) );
        })
        

module.exports = app;
