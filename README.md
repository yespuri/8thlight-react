# 8th-Light Book Search in React

## Prerequisites

Here is a list of the node packages used, also found in the package.json.

```
  "dependencies": {
    "axios": "^0.18.0",
    "concurrently": "^4.1.0",
    "dotenv": "^6.2.0",
    "express": "^4.16.4",
    "if-env": "^1.0.4",
    "nodemon": "^1.18.9",
    "path": "^0.12.7",
    "react": "^16.7.0",
    "react-dom": "^16.7.0",
    "react-scripts": "2.1.3"
  }
```

If you want to run this code, you'll also need to register a Google API Key. A guide can be found [here](https://developers.google.com/books/docs/v1/using). In server.js you can then replace process.env.APIkey with your own key. Once the node packages are installed running `npm start` from the root folder will start the client and Node server.

## Built With

- [ReactJS](https://reactjs.org/)
- Node/Express
- HTML/CSS
- Javascript
- [Google Books API](https://developers.google.com/books/docs/v1/using)
- Wikipedia API

## Steps Taken

After the initial file structure was set up, the first thing I had to was plan out how I wanted my components to work together. Originally I wanted two main sections: search and results. Search would handle the API request and pass the data to results(booksContainer) where it would be rendered.

Once I had the basic functionality working, I decided to make the project a bit more modular. I separated booksContainer from Search and passed in the searchBooks function to the Search component. This allows Search to be more flexible and capable of searching other APIs and other forms of information.

After the request is made to Google Books, an array is returned. We use that array and synchronously search Wikipedia's API by book title. This search returns an object containing the Wikipedia page ID that is attached to the book and then displayed via the book component. The objects don't always have consistent keys, including some keys containing vital information such as ISBN. Even when the ISBN's were there, there are a few that don't match up with Amazon or other 3rd party sites. I added error handling to account for irregular objects and also titles that exceed Wikipedia's max search length of 300 characters.

Another issue I ran into was Wikipedia search returning articles that had little to nothing to do with the book associated with it. I adjusted the search to only return a Wikipedia link if the book title was also inside the Wikipedia title. A small issue here is for something like Harry Potter and the Sorcerer's Stone, the Wiki page uses the original title of "The Philosopher's Stone" resulting in a missing link. The accuracy of the search is improved and I think this is the better solution.
