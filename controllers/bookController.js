const bookService = require('../services/bookService');

module.exports = {
  getBooks: async (req, res) => {
    try {
      const keyword = req.params.keyword;
      console.log('Searching: ', keyword);
      let books = await bookService.bookApiRequest(keyword);
      //if no results found...
      if (!books.length) {
        res.send(books);
      } else {
        //Adds the wiki info to the book object.
        const resp = await Promise.all(
          books.map(async book => {
            const author = (book.volumeInfo.authors && book.volumeInfo.authors[0]) || '';
            book.wikiInfo = await bookService.wikiRequest(book.volumeInfo.title, author);
            return book;
          })
        );
        res.send(resp);
      }
    } catch (err) {
      if (err) console.error(err);
    }
  },
};
