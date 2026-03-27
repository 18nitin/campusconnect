const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const eventRoutes = require('./routes/eventRoutes');

// Load env vars
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(cors()); // Allows React to communicate with Node
app.use(express.json()); // Allows us to accept JSON data in requests

// Routes
app.use('/api/events', eventRoutes);

// Basic Route
app.get('/', (req, res) => {
  res.send('Campus Connect API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});