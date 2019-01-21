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

async function bookApiRequest(keyword) {
  const apiKey = process.env.APIkey;
  keyword = keyword.split(' ').join('+');
  const result = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${keyword}&key=${apiKey}`
  );
  return result.data;
}

async function wikiRequest(keyword) {
  const result = await axios.get(
    `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${keyword}&format=json`
  );
  return result.data;
}

app.get('/api/search/:keyword', async (req, res) => {
  const keyword = req.params.keyword;
  let resp = await Promise.all([bookApiRequest(keyword), wikiRequest(keyword)]);
  console.log(resp);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
