import React, { Component } from 'react';
import './book.css';

export default class book extends Component {
  state = {
    wikiLink: '',
  };

  render() {
    const isbn = this.props.isbn.identifier;
    return (
      <div className="single-book">
        <img src={this.props.img} />
        <h3>{this.props.title}</h3>
        <p> Author(s): {this.props.author.map(author => `${author} `)} </p>
        <p>Publisher: {this.props.publisher}</p>
        <p>
          ISBN:
          <a href={`https://isbnsearch.org/isbn/${isbn}`}>{this.props.isbn.identifier}</a>
        </p>
        {this.props.wiki && (
          <a href={`https://en.wikipedia.org/?curid=${this.props.wiki}`}>
            <img src="/images/Wikipedia_Icon.svg" />
          </a>
        )}

        <a href={`https://www.amazon.com/s?k=${isbn}`}>
          <img src="/images/amazon_Icon.png" />
        </a>
      </div>
    );
  }
}
