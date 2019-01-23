export default {
  searchBooks: async function(keyword) {
    console.log('search being sent to server');
    let bookData = await fetch(`/api/search/${keyword}`);
    bookData = await bookData.json();
    console.log('bookData retrieved from server');
    return bookData;
  },
};
