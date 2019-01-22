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
    encodeURI(`https://www.googleapis.com/books/v1/volumes?q=${keyword}&key=${apiKey}`)
  );
  return result.data.items;
}

async function wikiRequest(keyword) {
  const result = await axios.get(
    encodeURI(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${keyword}&format=json`
    )
  );
  // console.log(result.data);
  return result.data.query.search[0];
}

app.get('/api/search/:keyword', async (req, res) => {
  const keyword = req.params.keyword;
  let books = await bookApiRequest(keyword);
  const resp = await Promise.all(
    books.map(async book => {
      book.wikiInfo = await wikiRequest(book.volumeInfo.title);
      return book;
    })
  );
  res.send(resp);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
