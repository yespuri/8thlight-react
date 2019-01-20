export default {
  searchBooks: async function(page, keyword) {
    let bookData = await fetch(`/api/search/${keyword}`);
    bookData = await bookData.json();
    page.setState({ searchResults: bookData.items });
  },
};
