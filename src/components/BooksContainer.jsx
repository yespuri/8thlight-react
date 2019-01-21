import React, { Component } from 'react';
import Book from './book';
import './booksContainer.css';

export default class BooksContainer extends Component {
  render() {
    const searchResults = this.props.books.map(book => {
      const { volumeInfo } = book;
      return (
        volumeInfo && (
          <Book
            img={volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail}
            title={volumeInfo.title}
            author={volumeInfo.authors}
            publisher={volumeInfo.publisher}
            isbn={volumeInfo.industryIdentifiers[0]}
          />
        )
      );
    });

    return <div className="books-container">{searchResults}</div>;
  }
}
