import React, { Component } from 'react';
import SearchBooks from './components/SearchBar';
import BooksContainer from './components/BooksContainer';
import './App.css';
import Api from './utils/Api';

class App extends Component {
  state = {
    gridView: true,
    searchResults: {},
    test: 'app.js',
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>8th Light Books Search</h1>
          <SearchBooks searchBooksApi={Api.searchBooks}>
            <BooksContainer />
          </SearchBooks>
        </header>
      </div>
    );
  }
}

export default App;
