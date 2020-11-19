import React from 'react';

function CardItem(props) {
  return (
    <div className="card-body text-center">
      <h3 className="h5 nav-heading">{props.title}</h3>
      <p className="text-muted">{props.text}</p>
    </div>
  );
}

export default CardItem;