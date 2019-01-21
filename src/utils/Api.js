export default {
  searchBooks: async function(keyword) {
    let bookData = await fetch(`/api/search/${keyword}`);
    bookData = await bookData.json();
    return bookData;
  },
  searchWiki: async function(keyword) {
    let wikiData = await fetch(`/api/wiki/${keyword}`);
    wikiData = await wikiData.json();
    return wikiData;
  },
};
