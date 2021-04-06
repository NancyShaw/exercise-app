const express = require('express');
const model = require('../models/activities');

const app = express.Router();

    app
        .get('/:user_id', (req, res) => {
            res.send(model.GetByUserId(req.params.user_id));
        })
        .post('/:user_id', (req, res)=> {
            res.send( model.Add( req.params.user_id, req.body) );
        })

module.exports = app;