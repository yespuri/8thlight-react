import React, { Component } from 'react';

export default class Search extends Component {
  state = {
    searchTitle: '',
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
      let result = await this.props.api(this.state.searchTitle);
      console.log(result);
      await this.setState({ searchResults: result });
    } catch (err) {
      console.error(err);
    }
    this.setState({ searching: false });
  };

  render() {
    const { children } = this.props;
    const displayResults = React.Children.map(children, child => {
      return React.cloneElement(child, {
        books: this.state.searchResults,
      });
    });

    return (
      <div className="search-area">
        <div className="search-bar">
          <form action="">
            <label htmlFor="">Search {this.props.type}: </label>
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
