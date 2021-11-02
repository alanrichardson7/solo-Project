const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
    console.log('Made a successful get request to port 3000')
    res.status(200).send();
})

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`)
});

module.exports = app;


