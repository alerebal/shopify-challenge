const router = require('express').Router();
const {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem,
} = require('../controllers/items.controllers');

router.get('/items', getItems);
router.get('/item/:id', getItem);

router.post('/createItem', createItem);

router.put('/editItem/:id', updateItem);

router.delete('/deleteItem/:id', deleteItem);

module.exports = router;