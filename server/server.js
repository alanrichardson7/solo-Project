const express = require('express');
const path = require('path');
const app = express();
const router = require ('./routers/compositionRouter');
const mongoose = require('mongoose');
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/compositionDB', (err, db) => {
});

app.use('/build', express.static(path.resolve(__dirname, "../build")))

app.get('/', (req, res) => {
    /* not sure why I need multiple index.html files. some of our projects had one in build directory and an identical one in main directory, 
    which would be sent here. I'm gonna try just using the one in build directory for now*/
    res.status(200).sendFile(path.resolve(__dirname, "../build/index.html"));
});

app.use('/', router);


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});


module.exports = app;


