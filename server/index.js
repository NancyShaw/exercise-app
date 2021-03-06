const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT;

const { AuthenticateToken } = require('./controllers/security');
const usersCtrl = require('./controllers/users');
const sharesCtrl = require('./controllers/shares');
const goalsCtrl = require('./controllers/goals');
const friendsCtrl = require('./controllers/friends');
const activitiesCtrl = require('./controllers/activities');

app
    .use(express.json())
    .use(express.static('./docs'))
    .use(cors())

    //route all incoming traffic to the landing page to start
    .get('/', (req, res) => {
    res.send('Landing')
    })

    //mounting controllers
    .use('/users', usersCtrl)
    .use('/shares', AuthenticateToken, sharesCtrl)
    .use('/goals', AuthenticateToken, goalsCtrl)
    .use('/friends', AuthenticateToken, friendsCtrl)
    .use('/activities', AuthenticateToken, activitiesCtrl)

    .get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../docs/index.html') );
    })
    
    .use((error, req, res, next)=> {
        console.error(error); 
  
        res.status(error.code || 500);
        res.send({ msg: error.msg });
    })

app.listen(port, () => {
    console.log(`Exercise app listening at http://localhost:${port}`)
    }) 