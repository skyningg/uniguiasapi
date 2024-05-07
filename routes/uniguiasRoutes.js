const express = require('express');
const router = express.Router();
const uniguiasController = require('../controllers/uniguiasController');

// Rutas para University
router.post('/', uniguiasController.createUniversity);
router.get('/', uniguiasController.getAllUniversities);
/*router.get('/', uniguiasController.getUniversityById);
router.put('/', uniguiasController.updateUniversity);
router.delete('/', uniguiasController.deleteUniversity);*/


/*router.post('/', uniguiasController.createDegree);
router.get('/', uniguiasController.getAllDegrees);
router.get('/', uniguiasController.getDegreeById);
router.put('/', uniguiasController.updateDegree);
router.delete('/', uniguiasController.deleteDegree);
*/

module.exports = router;
