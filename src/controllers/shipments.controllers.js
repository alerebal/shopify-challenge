shipCtrl = {};
const Item = require('../models/Item');
const Shipment = require('../models/Shipment')

// Create a shipment function take a list of items, with the item id and the quantity, and return an order with the items id and the quantity of each items to be deliver if there are quantity of all of them.
shipCtrl.createShipment = async (req, res) => {
    try {
        const { customer_id, itemsList } = req.body;
        const items_to_shipment = [];
        const items_no_availables = [];
        for (let item of itemsList) {
            const qty = await getItemQty(item.item_id)
            // Check if there are enough quantity of the items,
            // if there are
            if (qty > 0) {
                // If the quantity of the order is less or equal than the stock quantity
                if (item.qty <= qty) {
                    items_to_shipment.push({item: item.item_id, qty: item.qty})
                } else {
                    // if there are not enough items, add the item_id and a message with the quantity no available to items_no_available array.
                    const qty_not_available = item.qty - qty;
                    items_to_shipment.push({item: item.item_id, qty})
                    items_no_availables.push({item: item.item_id, msg: `Quantity no available: ${qty_not_available}`})
                }
            // if there are not, add the item_id and a message to items_no_available array.
            } else {
                items_no_availables.push({item: item.item_id, msg: 'Item no available'})
            }
        }
        const shipment = new Shipment({customer_id, itemsList: items_to_shipment})
        await shipment.save()
        return res.status(200).json({shipment, items_no_availables})
    } catch (error) {
        console.log(error)
    }
}

const getItemQty = async (item_id) => {
    const item = await Item.findById(item_id);
    return item.qty
}

module.exports = shipCtrl;