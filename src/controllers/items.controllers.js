const itemsCtrl = {};
const Item = require('../models/Item');

itemsCtrl.getItems = async (req, res) => {
    console.log('Connected')
}

// Create an Item
itemsCtrl.createItem = async (req, res) => {
    try {
        const {name, description, price, qty} = req.body;
        const item = new Item({
            name, description, price, qty
        })
        await item.save()
        return res.json(item)
    } catch (error) {
        const err = error.message.split(': ')[2]
        return res.json({'Error': err})
    }
}

module.exports = itemsCtrl