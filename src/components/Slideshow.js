import React, { useState } from 'react';

function Slides({ components }) {
  const [ currentSlide, setCurrentSlide ] = useState(0);

  const slideLocations = components.map(
    (_, index) => <span>{index === currentSlide ? ' O ' : ' o '}</span>
  );

  function handleSlideChange(change) {
    setCurrentSlide(currentSlide => (currentSlide += change) % components.length);
  }

  return (
    <div>
      {components[currentSlide]}
      <div>
        <button onClick={() => handleSlideChange(-1)}>{'<'}</button>
        {slideLocations}
        <button onClick={() => handleSlideChange(1)}>{'>'}</button>
      </div>
    </div>
  )
}

export default Slides;