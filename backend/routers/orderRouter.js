
const express = require('express'); 
const router = express.Router(); 
const orderController = require('../controllers/orderController')
router.get('/order',orderController.getAll);
router.get('/order/:id',orderController.getOne);
router.post('/order',orderController.create);
router.put('/order/:id',orderController.update);
router.delete('/order/:id',orderController.delete);

module.exports = router; 