const itemsCtrl = {};
const Item = require('../models/Item');


// Create an Item
itemsCtrl.createItem = async (req, res) => {
    try {
        const { name, description, price, qty } = req.body;
        const item = new Item({
            name, description, price, qty
        });
        await item.save();
        return res.status(200).json({item});
    } catch (error) {
        return res.status(400).json({error: error.name, error_msg: error.message});
    };
};

// Retrieve all the items
itemsCtrl.getItems = async (req, res) => {
    try {
        const items = await Item.find();
        return res.status(200).json({ 'items': items });
    } catch (error) {
        return res.status(400).json({error: error.name, error_msg: error.message});
    };
};

// Retrieve an item by id
itemsCtrl.getItem = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await Item.findById(id);
        return res.status(200).json({item});
    } catch (error) {
        return res.status(400).json({error: error.name, error_msg: error.message});
    };
};

// Update an item
itemsCtrl.updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price, qty } = req.body;
        const itemUpdated = await Item.findByIdAndUpdate(id, {
            name, description, price, qty
        }, {new: true});
        await itemUpdated.save();
        return res.status(200).json({msg: 'Item has been updated', 'New item': itemUpdated});
    } catch (error) {
        return res.status(400).json({error: error.name, error_msg: error.message});
    };
    ;
}

// Delete an item
itemsCtrl.deleteItem = async (req, res) => {
    try {
        const itemToBook = await Item.findById(item_id)
        const new_qty = Number(qty_to_book) + itemToBook.qty
        itemToBook.qty = new_qty
        await itemToBook.save()
        return res.status(200).json({ msg: 'Item has been removed' });
    } catch (error) {
        return res.status(400).json({error: error.name, error_msg: error.message});
    }
}

module.exports = itemsCtrl