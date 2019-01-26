const express = require('express');
const path = require('path');
const axios = require('axios');
require('dotenv').load();

const app = express();
const PORT = process.env.PORT || 3001;

async function bookApiRequest(keyword) {
  try {
    const apiKey = process.env.APIkey;
    const searchQuery = encodeURIComponent(keyword);
    const result = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${apiKey}`
    );
    return result.data.items || [];
  } catch (err) {
    if (err) console.error(err);
  }
}

async function wikiRequest(title, author) {
  try {
    title = title.toLowerCase();
    const searchQuery = encodeURIComponent(`${title} ${author}`);
    //Wikipedia's API has a character limit of 300;
    if (searchQuery.length > 300) searchQuery = searchQuery.substring(0, 299);
    const result = await axios.get(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchQuery} book&format=json`
    );
    if (!result.data.query) console.log(result.data);
    const { search } = result.data.query;
    return search && search.length && search[0].title.toLowerCase().includes(title)
      ? search[0]
      : {};
  } catch (err) {
    if (err) console.error(err);
  }
}

app.get('/api/search/:keyword', async (req, res) => {
  try {
    const keyword = req.params.keyword;
    console.log('Searching: ', keyword);
    let books = await bookApiRequest(keyword);
    //if no results found...
    if (!books.length) {
      res.send(books);
    } else {
      //Adds the wiki info to the book object.
      const resp = await Promise.all(
        books.map(async book => {
          const author = (book.volumeInfo.authors && book.volumeInfo.authors[0]) || '';
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
