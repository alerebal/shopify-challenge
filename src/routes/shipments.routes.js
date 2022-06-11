const router = require('express').Router();
const {
    createShipment
} = require('../controllers/shipments.controllers');

router.post('/createShipment', createShipment)

module.exports = router