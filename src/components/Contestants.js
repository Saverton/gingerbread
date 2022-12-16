import React from 'react';
import ContestantCard from './ContestantCard';
import Slideshow from './Slideshow';
import CONTESTANTS from '../data/contestants';

function Contestants() {
  const contestantComponents = CONTESTANTS.map(
    contestant => <ContestantCard key={contestant.id} data={contestant} />
  )

  return (
    <main>
      <h1>Meet the contestants</h1>
      <Slideshow components={contestantComponents} />
    </main>
  );
}

export default Contestants;