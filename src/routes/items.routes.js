const router = require('express').Router()
const {
    getItems
} = require('../controllers/items.controllers')

router.get('/', getItems)

module.exports = router