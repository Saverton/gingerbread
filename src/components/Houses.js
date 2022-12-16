import React from 'react';
import HOUSES from '../data/gingerbreadHouses';
import HouseCard from './HouseCard';
import Slideshow from './Slideshow';

function Houses() {
  const houseComponents = HOUSES.map(
    house => <HouseCard key={house.id} />
  );

  return (
    <main>
      <h1>Contest Entries</h1>
      <Slideshow components={houseComponents} />
    </main>
  );
}

export default Houses;