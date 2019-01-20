export default {
  searchBooks: async function(keyword) {
    try {
      let bookData = await fetch(`/api/search/${keyword}`);
      bookData = await bookData.json();
      return bookData;
    } catch (e) {
      console.error(e);
    }
  },
};
