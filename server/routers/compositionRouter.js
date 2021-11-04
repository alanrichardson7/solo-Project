const express = require('express');
const compositionController = require('../controllers/compositionController');
const router = express.Router();

router.get('/search', compositionController.findComposition, (req, res) => {
    res.status(200).json(res.locals.result);
});

module.exports = router;