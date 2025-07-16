const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', blogController.getAll);
router.post('/', authMiddleware, blogController.create);
router.get('/:id', blogController.getById);

module.exports = router;
