# 8th-Light Book Search in React

This project is built in React with a Node backend and deployed on Heroku [here](http://bq-8thlight-react.herokuapp.com/). Currently it's designed to search the Google Books API and return the first 10 results. Each of these results have additional links attached to them that lead to a search by ISBN, an Amazon search by title, and a Wikipedia page if it exists.

## Prerequisites

After cloning and installing packages, you'll need to register a Google API Key. A guide can be found [here](https://developers.google.com/books/docs/v1/using). In backend/services/bookService.js you can then replace process.env.APIkey with your own key. Once the node packages are installed running `npm start` from the root folder will start the client and Node server.

## Built With

- [ReactJS](https://reactjs.org/)
- Node/Express
- HTML/CSS
- Javascript
- [Google Books API](https://developers.google.com/books/docs/v1/using)
- Wikipedia API

## Steps Taken

After the initial file structure was set up, the first thing I had to was plan out how I wanted my components to work together. Originally I wanted two main sections: search and results. Search would handle the API request and pass the data to results(booksContainer) where it would be rendered.

Once I had the basic functionality working, I wanted to make sure my components were modular. I separated booksContainer from Search and passed in the searchBooks function to the Search component. This allows Search to be more flexible to other types of search depending on which function is passed down to it.

After the request is made to Google Books, an array is returned. We use that array and synchronously search Wikipedia's API by the individual book title. This search returns an object (containing the Wikipedia page ID) that is attached to the book and then displayed via the book component. This book object has much more information than what's displayed so if we need to add information later, it will be easily accessible.

## Issues

When searching Google Books and Wikipedia I would run into the issues of irregular objects and unrelated search results, respectively. Google Book's objects didn't always have consistent keys, including some keys containing vital information such as ISBN. Even when the ISBN's were there, they weren't always correct, ie. they didn't match up with Amazon or other 3rd party sites. I added error handling to account for some irregular objects but I haven't looked at every edge case.

Originally I had a Wikipedia icon that connected to the first search result that was returned. The problem with this is Wikipedia searches had a tendency to return pages that were not associated with the book title, so I added code to make sure it only returned an object if the titles were similar. A small issue here is books that have alternate titles. Take for example something like Harry Potter and the Sorcerer's Stone, where Wiki page uses the original title of "The Philosopher's Stone" resulting in a missing link. I thought this was the better alternative to having unrelated search results attached to each book.

## Testing

Testing modules are written with Jest and Enzyme and can be found in the `__tests__` folder under src/components. You can run `npm test` from the root directory to initiate the tests.
