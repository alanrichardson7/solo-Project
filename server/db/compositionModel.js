const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const compositionSchema = new Schema({
    title: { type: String, required: true, unique: true },
    composer: { type: String, required: true },
    duration: { type: Number, required: true },
    violin: { type: Number },
    viola: { type: Number },
    cello: { type: Number },
    bass: { type: Number },
    piano: { type: Number },
    marimba: { type: Number },
})

/* FYI - compositions.json is just for show. using actual database now!!! */

module.exports = mongoose.model('composition', compositionSchema);