const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  volume: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Stock', stockSchema);
