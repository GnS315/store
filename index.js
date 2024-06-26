const express = require('express');
const router = require('./routes/index');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use('/api', router);

try {
  app.listen(port);
} catch(_) {
  //Do nothing
}
