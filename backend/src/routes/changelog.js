const express = require('express');
const router = express.Router();
const changelogController = require('../controllers/changelogController');

router.get('/', changelogController.getAll);

module.exports = router;
