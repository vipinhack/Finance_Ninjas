const express = require('express');
const { fetchStockData } = require('../controllers/stockController');
const router = express.Router();

router.post('/fetch', fetchStockData);

module.exports = router;
