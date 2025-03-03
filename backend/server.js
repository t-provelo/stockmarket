// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./db'); // Connect to MongoDB

const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Stock Market Analysis API is running...');
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
