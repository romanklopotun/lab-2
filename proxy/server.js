const express = require('express');
const dotenv = require('dotenv');
const config = require('./config');
const routes = require('./routes');

dotenv.config();

const app = express();
const port = config.get('proxyPort');

app.use('/', routes);

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
