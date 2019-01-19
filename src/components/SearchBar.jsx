import React, { Component } from 'react';

export default class searchBar extends Component {
  state = {
    searchTitle: '',
    searchAuthor: '',
  };

  handleChange = e => {
    this.setState({
      searchTitle: e.target.value,
    });
  };

  searchTitle = async e => {
    e.preventDefault();
    let response = await (await fetch(`/api/search/${this.state.searchTitle}`)).json();
    return response;
  };

  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="">Search Title:</label>
          <input onChange={this.handleChange} type="text" value={this.state.searchTitle} />
          <button type="submit" onClick={this.searchTitle}>
            Search
          </button>
        </form>
      </div>
    );
  }
}
