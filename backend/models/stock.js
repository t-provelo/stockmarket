const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  name: { type: String, required: true },
  symbol: { type: String, required: true },
  price: { type: Number, required: true },
  changePercentage: { type: Number },
  volume: { type: Number },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Stock', stockSchema);

