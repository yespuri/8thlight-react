const express = require('express');
const routes = require('./routes');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

const app = express();
const PORT = process.env.PORT || 3001;

app.use(routes);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
