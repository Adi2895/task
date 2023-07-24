const express = require('express');
const controller = require('../controlller/controller')
const router = express.Router();
router.get('/fetch', controller.func)

module.exports = router;