const express = require('express');
const path = require('path');
const app = express();
const router = require ('./routers/compositionRouter');
const mongoose = require('mongoose');
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/compositionDB', (err, db) => {
});


app.use('/', router);

app.get('/', (req, res) => {
    console.log('Made a successful get request to port 3000');
    res.status(200).send();
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});


module.exports = app;


