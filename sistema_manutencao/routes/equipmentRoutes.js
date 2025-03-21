const express = require('express');
const router = express.Router();
const equipmentController = require('../controllers/equipmentController');

router.post('/equipamentos', equipmentController.createEquipment);
router.get('/equipamentos', equipmentController.showEquipments);
router.get('/equipamentos/:id', equipmentController.searchEquipmentById);
router.put('/equipamentos/:id', equipmentController.updateEquipment);
router.delete('/equipamentos/:id', equipmentController.deleteEquipment);

module.exports = router;