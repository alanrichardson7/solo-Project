/* in get requests, can use composition.find( { 'desiredKey': 'desiredValue' }) to find works.
in post request, can use composition.create( {} ) to create a new work */

const compositionController = {};

compositionController.findComposition = (req, res, next) => {
    const { search } = req.query;
    res.locals.searchResponse = compositions.find(search, (err, res) => {
        console.log(res);
        return next();
    })
}

module.exports = compositionController;