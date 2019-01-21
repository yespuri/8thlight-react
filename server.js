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
  const apiKey = process.env.APIkey;
  const keyword = req.params.keyword.split(' ').join('+');
  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${keyword}&key=${apiKey}`)
    .then(resp => res.send(resp.data))
    .catch(err => {
      console.log(err);
      if (err) res.send(err);
    });
});

app.get(`/api/wiki/:keyword`, (req, res) => {
  const keyword = req.params.keyword;
  console.log(req.params);
  axios
    .get(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${keyword}&format=json`
    )
    .then(resp => res.send(resp.data))
    .catch(err => {
      console.log(err);
      if (err) res.send(err);
    });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
