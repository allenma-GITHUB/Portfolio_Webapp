const express = require('express');
const router = express.Router();
const certificationController = require('../controllers/certificationController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', certificationController.getAll);
router.post('/', authMiddleware, certificationController.create);

module.exports = router;
