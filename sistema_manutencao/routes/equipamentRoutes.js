const express = require('express');
const router = express.Router();
const equipamentController = require('../controllers/equipamentController');

router.post('/equipamentos', equipamentController.createEquipament);
router.get('/equipamentos', equipamentController.showEquipaments);
router.get('/equipamentos/:id', equipamentController.searchEquipamentById);
router.put('/equipamentos/:id', equipamentController.updateEquipament);
router.delete('/equipamentos/:id', equipamentController.deleteEquipament);

module.exports = router;