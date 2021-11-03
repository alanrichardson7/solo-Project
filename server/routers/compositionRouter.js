const express = require('express');
const compositionController = require('../controllers/compositionController');
const router = express.Router();
const composition = require('../db/compositionModel');

/* in get requests, can use composition.find( { 'desiredKey': 'desiredValue' }) to find works.
in post request, can use composition.create( {} ) to create a new work */

/* mongosh commands
in one terminal, run - sudo mongod --bind_ip 127.0.0.1 --dbpath ~/data/db
in another terminal, run - mongosh
in another terminal, run - npm start
use compositionsDB
db.compositions.find().pretty() 
db.compositions.drop( { 'desiredKey': 'desiredValue' })
*/

router.get('/', compositionController.findComposition, (res, req) => {
    res.status(200).json(res.locals.searchResponse);
});

module.exports = router;