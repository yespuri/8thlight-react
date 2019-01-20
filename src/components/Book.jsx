import React from 'react';
import './Book.css';

export default function bookGridComponent(props) {
  return (
    <div>
      <img src={props.img} />
      <h3>{props.title}</h3>
      {props.author.map(author => {
        return <p>{author}</p>;
      })}
      <p>{props.publisher}</p>
    </div>
  );
}
