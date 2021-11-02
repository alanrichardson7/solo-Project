const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const compositionModel = new Schema({
    title: { type: String, required: true },
    composer: { type: String, required: true }
})


/* Example composition object
const newPiece = new Composition({ title: 'Shaker Loops', 
    composer: 'John Adams', violin: 4, viola: 2, cello: 2,
    bass: 1, duration: 32}) 
}
*/