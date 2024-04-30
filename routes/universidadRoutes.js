const express = require('express');
const router = express.Router();
const universidadController = require('../controllers/universidadController');

router.post('/', universidadController.createUniversidad);

// Otros enrutamientos según sea necesario

module.exports = router;
