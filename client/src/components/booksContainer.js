import React, { Component } from 'react';
import Book from './book';
import './booksContainer.css';

export default class BooksContainer extends Component {
  render() {
    const searchResults = this.props.info.map(book => {
      const { volumeInfo } = book;

      return (
        volumeInfo && (
          <Book
            img={volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail}
            title={volumeInfo.title}
            authors={volumeInfo.authors}
            publisher={volumeInfo.publisher}
            isbn={volumeInfo.industryIdentifiers && volumeInfo.industryIdentifiers[0].identifier}
            wiki={book.wikiInfo.pageid}
          />
        )
      );
    });

    return <div className="books-container">{searchResults}</div>;
  }
}
