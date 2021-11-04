/* in get requests, can use composition.find( { 'desiredKey': 'desiredValue' }) to find works.
in post request, can use composition.create( {} ) to create a new work */
const db = require('../db/compositionModel');

const compositionController = {};

compositionController.findComposition = (req, res, next) => {
    try {
        const query = {};
        if (req.query.instrumentField1){
            const instrument = req.query.instrumentField1;
            const number = req.query.instrumentNumber1;
            query[instrument] = number;
        }
        if (req.query.instrumentField2){
            instrument = req.query.instrumentField2;
            number = req.query.instrumentNumber2;
            query[instrument] = number;
        }
        if (req.query.instrumentField3){
            instrument = req.query.instrumentField3;
            number = req.query.instrumentNumber3;
            query[instrument] = number;
        }
        if (req.query.instrumentField4){
            instrument = req.query.instrumentField4;
            number = req.query.instrumentNumber4;
            query[instrument] = number;
        }
        if (req.query.instrumentField5){
            instrument = req.query.instrumentField5;
            number = req.query.instrumentNumber5;
            query[instrument] = number;
        }
        db.find(query)
            .then(data => {
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