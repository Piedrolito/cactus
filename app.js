const { Console } = require('console');
const express = require('express');
var bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());

app.use('/', express.static('frontend'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/frontend/acceuil.html');
});

app.post('/api/connection/cree', (req, res, next) => {
  console.log(req.body.pseudo);
  res.status(201).json({ message: 'Connection!'});
});


module.exports = app;