const axios = require('axios');

module.exports = {
  bookApiRequest: async keyword => {
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
  },

  wikiRequest: async (title, author) => {
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
      if (search && search.length && search[0].title.toLowerCase().includes(title)) {
        return search[0];
      } else {
        return {};
      }
    } catch (err) {
      if (err) console.error(err);
    }
  },
};
