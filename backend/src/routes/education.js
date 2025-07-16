const express = require('express');
const router = express.Router();
const educationController = require('../controllers/educationController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', educationController.getAll);
router.post('/', authMiddleware, educationController.create);

module.exports = router;
