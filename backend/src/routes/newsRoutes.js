const express = require('express');
const { fetchNews } = require('../controllers/newsController');
const router = express.Router();

router.get('/:ticker', fetchNews);

module.exports = router;
