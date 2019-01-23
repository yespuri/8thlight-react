import React, { Component } from 'react';
import BooksContainer from './booksContainer';
import Search from './components/searchBar';
import './App.css';
import Api from './utils/Api';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>8th Light Books Search</h1>
        <Search type="Book Title" api={Api.searchBooks}>
          <BooksContainer />
        </Search>
      </div>
    );
  }
}

export default App;
