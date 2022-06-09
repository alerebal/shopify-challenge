const itemsCtrl = {};
const Item = require('../models/Item');


// Create an Item
itemsCtrl.createItem = async (req, res) => {
    try {
        const { name, description, price, qty } = req.body;
        const item = new Item({
            name, description, price, qty
        })
        await item.save()
        return res.json(item)
    } catch (error) {
        const err = error.message.split(': ')[2]
        return res.status(400).json({ Error: err })
    }
}

// Retrieve all the items
itemsCtrl.getItems = async (req, res) => {
    try {
        const items = await Item.find()
        return res.json({ 'Items': items })
    } catch (error) {
        return res.status(404).json({ Error: 'Users not found' })
    }
}

// Retrieve an Item by id
itemsCtrl.getItem = async (req, res) => {
    try {
        const { id } = req.params
        const item = await Item.findById(id)
        return res.status(200).json(item)
    } catch (error) {
        return res.status(404).json({ Error: 'User not found' })
    }
}



module.exports = itemsCtrl