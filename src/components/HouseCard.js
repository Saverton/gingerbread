import React from 'react';
import { Link } from 'react-router-dom';
import CONTESTANTS from '../data/contestants';
import Tallmanometer from './Tallmanometer';

function HouseCard({ data }) {
  const { designerId, imageUrl, points } = data;
  const designer = CONTESTANTS[designerId];

  function getPlaceMessage(place) {
    switch (place) {
      case '1st': 
        return 'Masterpiece';
      case '2nd': 
        return 'Sensation';
      case '4th':
        return 'Construction';
      case '5th':
        return 'Cobble';
      default:
        return 'House';
    }
  }

  

  

  return (
    <article className='card'>
      <figure>
        <img src={imageUrl} alt={`${designer.name}'s House`} />
        <figcaption>{`${designer.name}'s ${designerId === 4 ? 'Cardboard' : 'Gingerbread'} ${getPlaceMessage(designer.placed)}`}</figcaption>
      </figure>
      <div className='card-details'>
        <p>Materials : EMPTY</p>
        <Link to={`/contestants/${designerId}`}>Meet The Designer</Link>
        <Tallmanometer points={points} />
      </div>
    </article>
  );
}

export default HouseCard;