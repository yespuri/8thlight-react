import React from 'react';

export default function bookGridComponent(props) {
  return (
    <div>
      <img src={this.props.img} />
      <h3>{this.props.title}</h3>
      <p>{this.props.author}</p>
    </div>
  );
}
