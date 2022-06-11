const helpers = {}
const Item = require('../models/Item');

// Get the quantity of an item 
helpers.getItemQty = async (item_id) => {
    const item = await Item.findById(item_id);
    return item.qty;
}

// Adjust the quantity of the inventory, useful to add or remove quantities of items.
helpers.adjustInventory = async (item_id, qty) => {
    const item = await Item.findById(item_id);
    const new_qty = item.qty + Number(qty);
    await Item.findByIdAndUpdate(item_id, {qty: new_qty});
    return new_qty;
}

module.exports = helpers;