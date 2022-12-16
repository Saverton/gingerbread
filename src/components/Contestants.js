import React from 'react';
import { useParams } from 'react-router-dom';
import ContestantCard from './ContestantCard';
import Slideshow from './Slideshow';
import CONTESTANTS from '../data/contestants';

function Contestants() {
  const { id } = useParams();
  const contestantComponents = CONTESTANTS.map(
    contestant => <ContestantCard key={contestant.id} data={contestant} />
  )

  return (
    <main>
      <h1>Meet the contestants</h1>
      <Slideshow components={contestantComponents} slideIndex={parseInt(id)} routeName='contestants' />
    </main>
  );
}

export default Contestants;