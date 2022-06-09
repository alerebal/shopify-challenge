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
        return res.status(200).json(item);
    } catch (error) {
        const err = error.message.split(': ')[2];
        return res.status(400).json({ Error: err });
    };
};

// Retrieve all the items
itemsCtrl.getItems = async (req, res) => {
    try {
        const items = await Item.find();
        return res.status(200).json({ 'Items': items });
    } catch (error) {
        return res.status(404).json({ Error: 'Users not found' });
    };
};

// Retrieve an item by id
itemsCtrl.getItem = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await Item.findById(id);
        return res.status(200).json(item);
    } catch (error) {
        return res.status(404).json({ Error: 'User not found' });
    };
};

// Update an item
itemsCtrl.updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price, qty } = req.body;
        const itemUpdated = await Item.findByIdAndUpdate(id, {
            name, description, price, qty
        });
        itemUpdated.save();
        return res.status(200).json(itemUpdated);
    } catch (error) {
        if (error.path == '_id') {
            return res.status(404).json({ Error: 'Item not found' });
        } else {
            return res.status(400).json({ Error: 'Item has not been updated' });
        };
    };
    ;
}

// Delete an item
itemsCtrl.deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await Item.findByIdAndRemove(id);
        return res.status(200).json({ msg: 'Item has been removed' });
    } catch (error) {
        return res.status(400).json({ Error: 'Item not found'})
    }
}


module.exports = itemsCtrl