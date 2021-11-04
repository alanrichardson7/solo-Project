/* in get requests, can use composition.find( { 'desiredKey': 'desiredValue' }) to find works.
in post request, can use composition.create( {} ) to create a new work */
const db = require('../db/compositionModel');

const compositionController = {};

compositionController.findComposition = (req, res, next) => {
    try {
        const instrument = req.query.instrumentField;
        const number = req.query.instrumentNumber;
        const query = {}
        query[instrument] = number;
        db.find(query)
            .then(data => {
                // console.log('attempting to find compositions');
                // console.log('data => ', data);
                res.locals.result = data;
                return next();
            })
    }
    catch (err) {
        return next({
            log: 'Unable to retrieve compositions from database',
            message: { err: 'Error occurred in compositionController.findCompositions, check server log for more details.'}
        });
    }
};

module.exports = compositionController;