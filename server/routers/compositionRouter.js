const express = require('express');
const compositionController = require('../controllers/compositionController');
const router = express.Router();
const composition = require('../db/compositionModel');

/* in get requests, can use composition.find( { 'desiredKey': 'desiredValue' }) to find works.
in post request, can use composition.create( {} ) to create a new work */

/* mongosh commands
in one terminal, run - sudo mongod --dbpath ~/data/db
in another terminal, run - mongosh
in another terminal, run - npm start
use compositionsDB
db.compositions.find().pretty() 
db.compositions.drop( { 'desiredKey': 'desiredValue' })
*/

router.get('/',/*compositionController.findComposition, */ (res, req) => {
    composition.find({ title: "Blueprint" }, (err, res) => {console.log(res)})
});

module.exports = router;