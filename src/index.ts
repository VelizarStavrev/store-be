// Libraries
import express from 'express';

// Configs
const config = require('./config/config');

// Imports
const routes = require('./routes');

// DB connection
require('./config/mongoose');

const app = express();
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', config.client_uri);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, authorization');
  next();
});
app.use(routes);

app.listen(config.port, () => {
  console.log(`The application is running on port ${config.port}. View at http://${config.hostname}:${config.port}/`)
});
