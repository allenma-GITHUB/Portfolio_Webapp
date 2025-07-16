const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skillController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', skillController.getAll);
router.post('/', authMiddleware, skillController.create);

module.exports = router;
