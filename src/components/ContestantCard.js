import React from 'react';
import { Link } from 'react-router-dom';

function ContestantCard({ data }) {
  const { name, imageUrl, houseId, quote, placed, imageCaption } = data;

  return (
    <div>
      <h2>{name}</h2>
      <figure>
        <img src={imageUrl} alt={`${name}'s portrait`} />
        <figcaption>{`${name}${imageCaption ? ` - ${imageCaption}` : ''}`}</figcaption>
      </figure>
      <Link to={`/houses/${houseId}`}>See {`${name}'s`} House</Link>
      <p><em>{quote}</em> - {name}</p>
      <h3>Placed : {placed}</h3>
    </div>
  );
}

export default ContestantCard;