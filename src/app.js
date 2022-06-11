const express = require('express');

const app = express();

// Settings
require('./database');
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api', require('./routes/items.routes'));
app.use('/api', require('./routes/shipments.routes'))

module.exports = app;