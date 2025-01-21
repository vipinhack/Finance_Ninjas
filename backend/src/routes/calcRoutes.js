const express = require('express');
const { calculateMetrics } = require('../controllers/calcController');
const router = express.Router();

router.post('/metrics', calculateMetrics);

module.exports = router;
