import React, { Component } from 'react';
import BooksContainer from './BooksContainer';

export default class searchBar extends Component {
  state = {
    searchTitle: '',
    searchAuthor: '',
    searchResults: [],
  };

  handleInput = e => {
    this.setState({
      searchTitle: e.target.value,
    });
  };

  searchTitle = async e => {
    e.preventDefault();
    await this.props.searchBooksApi(this, this.state.searchTitle);
  };

  render() {
    const { children } = this.props;
    const childrenContainer = React.Children.map(children, child => {
      return React.cloneElement(child, { books: this.state.searchResults });
    });

    return (
      <div className="search-area">
        <div className="search-bar">
          <form action="">
            <label htmlFor="">Search Title:</label>
            <input onChange={this.handleInput} type="text" value={this.state.searchTitle} />
            <button type="submit" onClick={this.searchTitle}>
              Search
            </button>
          </form>
        </div>
        {childrenContainer}
      </div>
    );
  }
}
