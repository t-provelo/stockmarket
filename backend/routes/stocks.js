const express = require('express');
const Stock = require('../models/stock');
const axios = require('axios');
const router = express.Router();

// Fetch stock data
router.get('/', async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.json(stocks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add stock data
router.post('/', async (req, res) => {
  const { name, symbol, price, changePercentage, volume } = req.body;
  const newStock = new Stock({ name, symbol, price, changePercentage, volume });

  try {
    const savedStock = await newStock.save();
    res.status(201).json(savedStock);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Fetch stock data from an external API (Alpha Vantage example)
router.get('/fetch', async (req, res) => {
  const apiKey = 'your-api-key'; // Replace with your Alpha Vantage API key
  const symbol = 'AAPL'; // Example stock symbol: Apple

  try {
    const response = await axios.get('https://www.alphavantage.co/query', {
      params: {
        function: 'TIME_SERIES_INTRADAY',
        symbol: symbol,
        interval: '5min',
        apikey: apiKey
      }
    });

    const stockData = response.data['Time Series (5min)'];
    res.json(stockData);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching stock data' });
  }
});

module.exports = router;
