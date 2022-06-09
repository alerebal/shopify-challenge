const {Schema, model} = require('mongoose');

// Create a basic Item model, just with a name, description, price and quantity. More features can be added, but I just going to leave it simple.
const ItemSchema = new Schema({
    name: {type: String, required: true},
    description: String,
    price: Number,
    qty: {type: Number, required: true, default: 0}
});

module.exports = model('Item', ItemSchema);