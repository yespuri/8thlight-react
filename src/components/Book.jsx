import React, { Component } from 'react';
import './book.css';

export default class book extends Component {
  render() {
    let { title, img, isbn, authors, publisher, wiki } = this.props;
    return (
      <div className="single-book">
        <img src={img} />
        <h3>{title}</h3>
        <p>Author(s): {authors ? authors.join(' ') : 'N/A'}</p>
        <p>Publisher: {publisher ? publisher : 'N/A'}</p>
        {isbn && (
          <p>
            ISBN:
            <a href={`https://isbnsearch.org/isbn/${isbn}`}>{isbn}</a>
          </p>
        )}
        {wiki && (
          <a
            href={`https://en.wikipedia.org/w/index.php?title=Special:Search&search=${title} novel`}
          >
            <img src="/images/Wikipedia_Icon.svg" />
          </a>
        )}
        {(authors || title) && (
          <a href={`https://www.amazon.com/s?k=${title} book`}>
            <img src="/images/amazon_Icon.png" />
          </a>
        )}
      </div>
    );
  }
}
