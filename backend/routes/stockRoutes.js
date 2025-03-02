const express = require('express');
const router = express.Router();
const { getStockData, addStock } = require('../controllers/stockController');

// Get stock data
router.get('/', getStockData);

// Add stock data (for testing or dynamic updates)
router.post('/add', addStock);

module.exports = router;
