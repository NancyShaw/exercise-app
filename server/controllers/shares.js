/** */

const express = require('express');
const model = require('../models/shares');

const app = express.Router();

    app
        .get('/', (req, res) =>{
            if( req.user.isAdmin) {
                res.send( model.GetAll() );
            } else {
                res.send( model.GetWall( req.user.handle) );
            }            
        }  )
        .get('/feed', (req, res) =>{
            res.send( model.GetFeed( req.user.handle) );
                       
        }  )
        
        .post('/', (req, res)=> { 
            req.body.handle = req.user.handle;
            res.send( model.Add(req.body) );
        })

        .delete('/:share_id', (req,res)=> res.send(model.Delete(req.params.share_id) ) )
        
module.exports = app;