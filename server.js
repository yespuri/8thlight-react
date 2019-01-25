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
  const encodedURI = encodeURI(
    `https://www.googleapis.com/books/v1/volumes?q=${keyword}&key=${apiKey}`
  );
  const result = await axios.get(encodedURI);
  return result.data.items || { error: 'no results found' };
}

async function wikiRequest(title, author) {
  //Wikipedia's API has a character limit of 300;
  if (title.length > 300) title = title.substring(0, 295);
  const encodedURI = encodeURI(
    `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${title} ${author} novel&format=json`
  );
  const result = await axios.get(encodedURI);
  const wikiInfo = result.data.query.search[0];
  if (wikiInfo && wikiInfo.title.includes(title)) {
    return wikiInfo;
  } else {
    return {};
  }
}

app.get('/api/search/:keyword', async (req, res) => {
  const keyword = req.params.keyword;
  console.log('Searching: ', keyword);
  try {
    let books = await bookApiRequest(keyword);
    //if no results found...
    if (books.error) {
      res.send(books);
    } else {
      //Adds the wiki info to the book object.
      const resp = await Promise.all(
        books.map(async book => {
          const author = book.volumeInfo.authors[0] || '';
          book.wikiInfo = await wikiRequest(book.volumeInfo.title, author);
          return book;
        })
      );
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
  app.use(express.static(__dirname + 'client/public'));
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/public/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
