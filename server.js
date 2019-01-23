const express = require('express');
const path = require('path');
const axios = require('axios');
require('dotenv').load();

const app = express();
const PORT = process.env.PORT || 3001;

async function bookApiRequest(keyword) {
  keyword = encodeURIComponent(keyword);
  const apiKey = process.env.APIkey;
  keyword = keyword.split(' ').join('+');
  const result = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${keyword}&key=${apiKey}`
  );
  return result.data.items || { error: 'no results found' };
}

async function wikiRequest(keyword) {
  keyword = encodeURIComponent(keyword);
  const result = await axios.get(
    encodeURI(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${keyword}&format=json`
    )
  );
  // if (!result.data.query) console.log(keyword, result.data);
  return result.data.query.search[0] || {};
}

app.get('/api/search/:keyword', async (req, res) => {
  const keyword = req.params.keyword;
  console.log('Searching: ', keyword);
  try {
    let books = await bookApiRequest(keyword);
    // console.log(books);
    if (books.error) {
      res.send(books);
    } else {
      const resp = await Promise.all(
        books.map(async book => {
          book.wikiInfo = await wikiRequest(book.volumeInfo.title);
          return book;
        })
      );
      // console.log(resp.filter(i => !i.wikiInfo));
      res.send(resp);
    }
  } catch (err) {
    if (err) console.error(err);
  }
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
} else {
  app.use(express.static(__dirname + '/client/public'));
  app.get('/', function(req, res) {
    console.log('hitting index.html');
    res.sendFile(path.join(__dirname, '/client/public/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
