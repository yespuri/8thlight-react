import React, { Component } from 'react';
import './book.css';
import Api from '../utils/Api';

export default class book extends Component {
  state = {
    wikiLink: '',
  };

  componentDidMount = async () => {
    let wikiData = await Api.searchWiki(this.props.title);
    console.log(this.props.isbn);
    console.log('WIKIDATA: ', wikiData.query);
    if (wikiData.query) {
      this.setState({ wikiLink: wikiData.query.search[0].pageid });
    }
  };

  render() {
    return (
      <div className="single-book">
        <img src={this.props.img} />
        <h3>{this.props.title}</h3>
        <p> Author(s): {this.props.author.map(author => `${author} `)} </p>
        <p>Publisher: {this.props.publisher}</p>
        <p>
          ISBN:
          <a href={`https://isbnsearch.org/isbn/${this.props.isbn.identifier}`}>
            {this.props.isbn.identifier}
          </a>
        </p>
        {this.state.wikiLink && (
          <a href={`https://en.wikipedia.org/?curid=${this.state.wikiLink}`}>
            <img src="/images/Wikipedia_Icon.svg" />
          </a>
        )}
      </div>
    );
  }
}
