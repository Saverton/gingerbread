import React from 'react';
import HOUSES from '../data/gingerbreadHouses';
import HouseCard from './HouseCard';

function Home() {
  const winHouse = HOUSES[0]

  return (
    <main>
      <article>
        <h2>About</h2>
        <p>
          This webpage is intended to recognize the incredible accomplishments of the various
          contestants of this gingerbread house making contest. A special thank you goes out 
          to our impossibly unbiased contest Judge, Jeff T., and to the homemade gingerbread maker, Ginger M.
        </p>
      </article>
      <h2>Meet the winner...</h2>
      <HouseCard data={winHouse} />
    </main>
  )
}

export default Home;