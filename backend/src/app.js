const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
app.use(bodyParser.json());

// Import routes
const stockRoutes = require('./routes/stockRoutes');
const calcRoutes = require('./routes/calcRoutes');
const newsRoutes = require('./routes/newsRoutes');

// Use routes
app.use('/api/stocks', stockRoutes);
app.use('/api/calculate', calcRoutes);
app.use('/api/news', newsRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
