import React from 'react';
import { Link } from 'react-router-dom';
import CONTESTANTS from '../data/contestants';

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

  function getTotalPoints() {
    return Object.values(points).reduce((sum, element) => sum + element, 0);
  }

  const pointBreakdown = Object.keys(points).map(
    (scoringCategory, index) => <p key={`scoring-${index}`}>{scoringCategory} : {Object.values(points)[index]}</p>
  );

  return (
    <article className='card'>
      <figure>
        <img src={imageUrl} alt={`${designer.name}'s House`} />
        <figcaption>{`${designer.name}'s ${designerId === 4 ? 'Cardboard' : 'Gingerbread'} ${getPlaceMessage(designer.placed)}`}</figcaption>
      </figure>
      <div className='card-details'>
        <p>Materials : EMPTY</p>
        <Link to={`/contestants/${designerId}`}>Meet The Designer</Link>
        <h3>Points : {getTotalPoints()}/50</h3>
        {pointBreakdown}
      </div>
    </article>
  );
}

export default HouseCard;