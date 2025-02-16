const express = require('express');
const app = express();
const connectDB = require('./config/db');
const planRoutes = require('./routes/planRoutes');
const errorHandler = require('./middleware/errorHandler');
const requestLogger = require('./middleware/requestLogger');
require('dotenv').config();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());
// Logging middleware
app.use(requestLogger);

// API routes
app.use('/api/plans', planRoutes);

// Global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
