const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/upload', authMiddleware, resumeController.upload);
router.get('/latest', authMiddleware, resumeController.getLatest);

module.exports = router;
