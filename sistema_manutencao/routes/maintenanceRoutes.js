const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenanceController');

router.post('/manutencoes', maintenanceController.createMaintenance);
router.get('/manutencoes', maintenanceController.showMaintenances);
router.get('/manutencoes/:id', maintenanceController.searchMaintenanceById);
router.put('/manutencoes/:id', maintenanceController.updateMaintenance);
router.delete('/manutencoes/:id', maintenanceController.deleteMaintenance);

module.exports = router;