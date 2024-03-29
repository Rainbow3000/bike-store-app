
const express = require('express'); 
const router = express.Router(); 
const {verifyUserRole,verifyAdminRole} = require('../utils/verifyToken')

const productController = require('../controllers/productController')
router.get('/product',verifyUserRole,productController.getAll);
router.get('/product/:id',productController.getOne);
router.post('/product',productController.create);
router.put('/product/:id',productController.update);
router.delete('/product/:id',productController.delete);

module.exports = router; 