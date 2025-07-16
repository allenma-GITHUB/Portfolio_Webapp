const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', projectController.getAll);
router.post('/', authMiddleware, projectController.create);

module.exports = router;
