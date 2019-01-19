import React, { Component } from 'react';
import BookGrid from './BookGridComponent';

export default class BooksContainer extends Component {
  render() {
    const searchResults = this.props.children.map(book => {
      return (
        <BookGrid
          img={book.volumeInfo.imageLinks.thumbnail}
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors[0]}
          publisher={book.volumeInfo.publisher}
        />
      );
    });

    return <div>{searchResults}</div>;
  }
}
