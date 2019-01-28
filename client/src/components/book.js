import React, { Component } from 'react';
import './book.css';

export default class book extends Component {
  render() {
    let { title, img, isbn, authors, publisher, wiki } = this.props;
    return (
      <div className="single-book">
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <p>Author(s): {authors ? authors.join(' ') : 'N/A'}</p>
        <p>Publisher: {publisher ? publisher : 'N/A'}</p>
        {isbn && (
          <p>
            ISBN:
            <a
              href={`https://isbnsearch.org/isbn/${isbn}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {isbn}
            </a>
          </p>
        )}
        {wiki && (
          <a
            href={`http://en.wikipedia.org/?curid=${wiki}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/Wikipedia_Icon.svg" alt="wiki-icon" />
          </a>
        )}
        {title && (
          <a
            href={`https://www.amazon.com/s?k=${title} book`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/amazon_Icon.png" alt="amazon-icon" />
          </a>
        )}
      </div>
    );
  }
}
