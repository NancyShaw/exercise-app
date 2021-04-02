const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT;

const usersCtrl = require('./controllers/users');

app
    .use(express.json())
    .use(express.static('./docs'))

    //route all incoming traffic to the landing page to start
    .get('/', (req, res) => {
    res.send('Landing')
    })

    //mounting controllers
    .use('/users', usersCtrl)

    .get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../docs/index.html') );
    })

app.listen(port, () => {
    console.log(`Exercise app listening at http://localhost:${port}`)
    }) 