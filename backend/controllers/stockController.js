const Stock = require('../models/stock');

// Get stock data
const getStockData = async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.json(stocks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add stock data
const addStock = async (req, res) => {
  const stock = new Stock({
    name: req.body.name,
    price: req.body.price,
    volume: req.body.volume,
  });

  try {
    const newStock = await stock.save();
    res.status(201).json(newStock);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getStockData, addStock };
