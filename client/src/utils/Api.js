export default {
  searchBooks: async function(keyword) {
    let bookData = await fetch(`/api/search/${keyword}`);
    bookData = await bookData.json();
    return bookData;
  },
};
