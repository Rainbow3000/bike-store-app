
const express = require('express'); 
const router = express.Router(); 
const commentController = require('../controllers/commentController')
router.get('/comment',commentController.getAll);
router.get('/comment/:id',commentController.getOne);
router.post('/comment',commentController.create);
router.put('/comment/:id',commentController.update);
router.delete('/comment/:id',commentController.delete);

module.exports = router; 