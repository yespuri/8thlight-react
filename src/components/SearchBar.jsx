import React, { Component } from 'react';

export default class searchBar extends Component {
  state = {
    searchTitle: '',
    searchAuthor: '',
    searchResults: [],
    searching: false,
  };

  handleInput = e => {
    this.setState({
      searchTitle: e.target.value,
    });
  };

  searchTitle = async e => {
    e.preventDefault();
    this.setState({ searching: true });
    try {
      await this.props.searchBooksApi(this, this.state.searchTitle);
    } catch (err) {
      console.log(err);
    }
    this.setState({ searching: false });
  };

  render() {
    const { children } = this.props;
    const displayResults = React.Children.map(children, child => {
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
            {this.state.searching ? <p>Searching...</p> : null}
          </form>
        </div>
        {displayResults}
      </div>
    );
  }
}
