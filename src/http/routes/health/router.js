const GetHealth = require('./health');

const express = require('express');
const router = express.Router();

router.get('/', GetHealth);

module.exports = router;