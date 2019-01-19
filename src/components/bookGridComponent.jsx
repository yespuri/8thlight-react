import React from 'react';

export default function bookGridComponent(props) {
  return (
    <div>
      <img src={props.img} />
      <h3>{props.title}</h3>
      <p>{props.author}</p>
      <p>{props.publisher}</p>
    </div>
  );
}
