// backend/db.js
require('dotenv').config(); // Load environment variables
const mongoose = require('mongoose'); // Import Mongoose

const mongoURI = process.env.MONGO_URI; // Get MongoDB URI from .env

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

module.exports = mongoose;
