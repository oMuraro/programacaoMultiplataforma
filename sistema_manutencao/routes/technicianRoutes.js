const express = require('express');
const router = express.Router();
const technicianController = require('../controllers/technicianController');

router.post('/tecnicos', technicianController.createTechnician);
router.get('/tecnicos', technicianController.showTechnicians);
router.get('/tecnicos/:id', technicianController.searchTechnicianById);
router.put('/tecnicos/:id', technicianController.updateTechnician);
router.delete('/tecnicos/:id', technicianController.deleteTechnician);

module.exports = router;