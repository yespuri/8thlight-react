import React, { Component } from 'react';
import Book from './Book';
import './BooksContainer.css';

export default class BooksContainer extends Component {
  // onClick = () => {
  //   console.log(this.props.books);
  // };
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
          />
        )
      );
    });

    return (
      <div className="books-container">
        {/* <button onClick={this.onClick}>cLICK</button> */}
        {searchResults}
      </div>
    );
  }
}
