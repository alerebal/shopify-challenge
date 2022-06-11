const {Schema, model} = require('mongoose');

const ShipmentSchema = new Schema({
    // customer must be another model, and here I should create a relation between the customer and the shipment as well as itemList

    // customer_id: {type: Schema.Types.ObjectId, ref: 'Customer', required: true}
    customer_id: {type: String, required: true},
    // itemList: {type: Schema.Types.ObjectId, ref: 'ShipmentItem', required: true}
    itemsList: {type: [Object], required: true}
})

module.exports = model('Shipment', ShipmentSchema)

