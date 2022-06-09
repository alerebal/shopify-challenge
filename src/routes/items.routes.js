const router = require('express').Router()
const {
    getItems,
    getItem,
    createItem
} = require('../controllers/items.controllers')

router.get('/items', getItems)
router.get('/item/:id', getItem)

router.post('/createItem', createItem)

module.exports = router