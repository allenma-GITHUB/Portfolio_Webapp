const express = require('express');
const router = express.Router();
const experienceController = require('../controllers/experienceController');
const authMiddleware = require('../middleware/authMiddleware');


router.get('/', experienceController.getAll);
router.post('/', authMiddleware, experienceController.create);

module.exports = router;
