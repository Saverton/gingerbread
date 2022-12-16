import React from 'react';
import { Link } from 'react-router-dom';

function ContestantCard({ data }) {
  const { name, imageUrl, houseId, quote, placed, imageCaption } = data;

  return (
    <article className='card'>
      <figure>
        <img src={imageUrl} alt={`${name}'s portrait`} />
        <figcaption>{`${name}${imageCaption ? ` - ${imageCaption}` : ''}`}</figcaption>
      </figure>
      <div className='card-details'>
        <h2>{name}</h2>
        <Link to={`/houses/${houseId}`}>See {`${name}'s`} House</Link>
        <p><em>{quote}</em> - {name}</p>
        <h3>Placed : {placed}</h3>
      </div>
    </article>
  );
}

export default ContestantCard;