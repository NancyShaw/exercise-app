const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app
    .use(express.static('./docs'))
    .get('/', (req, res) => {
    res.send('Landing')
    })
    .get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../docs/index.html') );
    })

app.listen(port, () => {
    console.log(`Exercise app listening at http://localhost:${port}`)
    }) 