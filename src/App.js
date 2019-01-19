import React, { Component } from 'react';
import BookGridComponent from './components/BookGridComponent';
import SearchTitle from './components/SearchBar';

import './App.css';

class App extends Component {
  state = {
    gridView: true,
    searchResults: {},
  };

  searchResults = React.createRef();

  handleSearch = () => {
    console.log('hello');
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>8th Light Books Search</h1>

          <SearchTitle ref={this.searchResults} onSearch={this.handleSearch} />

          {/* <BookGridComponent /> */}
        </header>
      </div>
    );
  }
}

export default App;
