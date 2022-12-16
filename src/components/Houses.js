import React from 'react';
import { useParams } from 'react-router-dom';
import HOUSES from '../data/gingerbreadHouses';
import HouseCard from './HouseCard';
import Slideshow from './Slideshow';

function Houses() {
  const { id } = useParams();
  const houseComponents = HOUSES.map(
    house => <HouseCard key={house.id} data={house} />
  );

  return (
    <main>
      <h1>Contest Entries</h1>
      <Slideshow components={houseComponents} slideIndex={parseInt(id)} routeName='houses' />
    </main>
  );
}

export default Houses;