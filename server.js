const express = require('express');
const routes = require('./routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(routes);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
