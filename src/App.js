import React, { Component } from 'react';
import SearchBooks from './components/SearchBar';
import BooksContainer from './components/BooksContainer';

import './App.css';

class App extends Component {
  state = {
    gridView: true,
    searchResults: {},
    test: 'app.js',
  };

  returnSearchResults = () => {
    console.log('hello');
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>8th Light Books Search</h1>
          <SearchBooks />
        </header>
      </div>
    );
  }
}

export default App;
