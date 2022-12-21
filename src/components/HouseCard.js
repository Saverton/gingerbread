import React from 'react';
import { Link } from 'react-router-dom';
import CONTESTANTS from '../data/contestants';
import Tallmanometer from './Tallmanometer';

function HouseCard({ data }) {
  const { designerId, imageUrl, points, materials } = data;
  const designer = CONTESTANTS[designerId];

  function getPlaceMessage(place) {
    switch (place) {
      case '1st': 
        return 'Masterpiece';
      case '2nd':
      case '4th':
        return 'Sensation';
      case '5th':
        return 'Cobbling';
      default:
        return 'House';
    }
  }
  
  const materialList = materials.map( (material, idx) => <li key={`mat-${idx}`}>{material}</li>)

  return (
    <article className='card'>
      <figure>
        <img src={process.env.PUBLIC_URL + imageUrl} alt={`${designer.name}'s House`} />
        <figcaption>{`${designer.name}'s ${materials[0]} ${getPlaceMessage(designer.placed)}`}</figcaption>
      </figure>
      <div className='card-details'>
        <h3>Construction Materials</h3>
        <ul>
          {materialList}
        </ul>
        <Link to={`/contestants/${designerId}`}>Meet The Designer</Link>
        <Tallmanometer points={points} />
      </div>
    </article>
  );
}

export default HouseCard;