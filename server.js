const express = require('express');
const routes = require('./routes');
require('dotenv').load();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(routes);

if (process.env.NODE_ENV === 'production') {
  router.use(express.static('client/build'));
}

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
