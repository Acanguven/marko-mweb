const express = require('express');
const marko = require('marko');
const helmet = require('helmet');
require('marko/express');
const compression = require('compression');


const app = express();

app.use(compression());
app.use(require('lasso/middleware').serveStatic());

require('./routes').forEach(routeConfig => {
  app[routeConfig.method](routeConfig.path, routeConfig.handler);
});

app.listen(8080, function () {
  if (process.send) {
    process.send('online');
  }
});