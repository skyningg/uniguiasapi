const express = require('express');
const router = express.Router();
const licenciaturaController = require('../controllers/licenciaturaController');

router.post('/', licenciaturaController.createDegree);
router.get('/', licenciaturaController.getAllDegrees);
//router.get('/', uniguiasController.getDegreeById);
//router.put('/', uniguiasController.updateDegree);
//router.delete('/', uniguiasController.deleteDegree);

