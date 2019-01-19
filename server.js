const express = require('express');
const path = require('path');
const axios = require('axios');
require('dotenv').load();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/api/search/:keyword', (req, res) => {
  console.log('get request backend');
  const apiKey = process.env.APIkey;
  const keyword = req.params.keyword.split(' ').join('+');
  console.log(keyword);
  console.log(apiKey);
  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${keyword}&key=${apiKey}`)
    .then(resp => res.send(resp.data));
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
