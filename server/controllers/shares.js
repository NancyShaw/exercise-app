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
        .get('/:share_id',(req,res)=> {
            if(+req.params.share_id) {
                //what's my use-case for this? do I have access control?
                res.send( model.Get(req.params.share_id) )
            } else {
                res.send( model.GetWall( req.params.share_id) );
            }
        })
        
        .post('/', (req, res)=> { 
            req.body.handle = req.user.handle;
            res.send( model.Add(req.body) );
        })
        .patch('/:share_id', (req,res)=> res.send(
            model.Update( req.params.share_id, req.body)
        ))
        .delete('/share_id', (req,res)=> res.send(model.Delete(req.params.share_id) ) )
        

module.exports = app;