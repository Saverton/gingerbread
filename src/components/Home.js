import React from 'react';
import CONTESTANTS from '../data/contestants';
import HOUSES from '../data/gingerbreadHouses';

function Home() {
  const winHouse = HOUSES[0]
  const winContestant = CONTESTANTS[winHouse.designerId];

  return (
    <main>
      <h2>Meet the winner...</h2>
      <figure>
        <img src={winHouse.imageUrl} />
        <figcaption>{`${winContestant.name}'s gingerbread masterpiece`}</figcaption>
      </figure>
      <h2>About</h2>
      <p>
        This webpage is intended to recognize the incredible accomplishments of the various
        contestants of this gingerbread house making contest. A special thank you goes out 
        to our contest Judge, Jeff T., and to the homemade gingerbread maker, Ginger M.
      </p>
    </main>
  )
}

export default Home;