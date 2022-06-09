const router = require('express').Router()
const {
    getItems,
    createItem
} = require('../controllers/items.controllers')

router.get('/', getItems)

router.post('/createItem', createItem)

module.exports = router