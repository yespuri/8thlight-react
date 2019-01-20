import React, { Component } from 'react';
import BookGrid from './BookGridComponent';

export default class BooksContainer extends Component {
  onClick = () => {
    console.log(this.props.books);
  };
  render() {
    const searchResults = this.props.books.map(book => {
      return (
        <BookGrid
          img={book.volumeInfo.imageLinks.thumbnail}
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors[0]}
          publisher={book.volumeInfo.publisher}
        />
      );
    });

    return (
      <div>
        <button onClick={this.onClick}>cLICK</button>
        {searchResults}
      </div>
    );
  }
}
