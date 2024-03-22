const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes setup
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
