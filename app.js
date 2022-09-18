const { Console } = require('console');
const express = require('express');


const app = express();

app.use('/res', express.static('res'));
app.use(express.static('res/img'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/main.html');
});


module.exports = app;