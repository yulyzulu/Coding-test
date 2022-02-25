const express = require('express');
const cors = require('cors');
const app = express();

//settings
app.set('port', process.env.PORT || 3001);

//midelwares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/languages', require('./routes/languages'));

module.exports = app;