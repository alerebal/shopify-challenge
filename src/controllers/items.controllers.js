const { send } = require("express/lib/response");

const itemsCtrl = {};

itemsCtrl.getItems = async (req, res) => {
    console.log('Connected')
    res.send('Connected')
}

module.exports = itemsCtrl