import React from 'react';
import { Link } from 'react-router-dom';
// import img from '../../public/images/houses/01.jpeg';

function ContestantCard({ data }) {
  const { name, imageUrl, houseId, quote, placed, imageCaption } = data;

  return (
    <article className='card'>
      <figure>
        <img src={(houseId === 4 ? '' : process.env.PUBLIC_URL) + imageUrl} alt={`${name}'s portrait`} />
        <figcaption>{`${name}${imageCaption ? ` - ${imageCaption}` : ''}`}</figcaption>
      </figure>
      <div className='card-details'>
        <h2>{name}</h2>
        <Link to={`/houses/${houseId}`}>See {`${name}'s`} House</Link>
        <p><em>{quote}</em></p>
        <p className='right'> - {name}</p>
        <h3>Placed : {placed}</h3>
      </div>
    </article>
  );
}

export default ContestantCard;