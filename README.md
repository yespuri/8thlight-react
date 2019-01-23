# 8th-Light Book Search in React

## Prerequisites

Here is a list of the node packages used, also found in the package.json.

```
"dependencies": {
  "axios": "^0.18.0",
  "concurrently": "^4.1.0",
  "dotenv": "^6.2.0",
  "express": "^4.16.4",
  "nodemon": "^1.18.9",
  "path": "^0.12.7",
  "react": "^16.7.0",
  "react-dom": "^16.7.0",
  "react-scripts": "2.1.3"
},
```

If you want to run this code, you'll also need to register a Google API Key. A guide can be found [here](https://developers.google.com/books/docs/v1/using). In server.js you can then replace process.env.APIkey with your own key.

## Built With

- [ReactJS](https://reactjs.org/)
- Node/Express
- HTML/CSS
- Javascript
- [Google Books API](https://developers.google.com/books/docs/v1/using)
- Wikipedia API

## Steps Taken

After the initial file structure was set up, the first thing I had to was plan out how I wanted my components to work together. Originally I wanted two main sections: search and results. Search would handle the API request and pass the data to results(booksContainer) where it would be rendered.

Once I had the basic functionality working, I decided to make the project a bit more modular. I separated booksContainer from Search and passed in the searchBooks function to the Search component. This allows Search to be more flexible to searching other APIs and other forms of information

## Known Issues
