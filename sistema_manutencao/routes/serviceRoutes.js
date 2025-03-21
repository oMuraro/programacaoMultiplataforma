const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

router.post('/servicos', serviceController.createService);
router.get('/servicos', serviceController.showServices);
router.get('/servicos/:id', serviceController.searchServiceById);
router.put('/servicos/:id', serviceController.updateService);
router.delete('/servicos/:id', serviceController.deleteService);

module.exports = router;