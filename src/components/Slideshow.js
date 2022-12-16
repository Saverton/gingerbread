import React from 'react';
import { useNavigate } from 'react-router-dom';

function Slideshow({ components, slideIndex, routeName }) {
  const slideLocations = components.map(
    (_, index) => <span key={`slide-index-${index}`}>{index === slideIndex ? ' O ' : ' o '}</span>
  );
  const navigate = useNavigate();

  function handleSlideChange(change) {
    let newSlideIndex = (slideIndex + change) % components.length;
    if (newSlideIndex < 0)
      newSlideIndex = components.length - 1;
    navigate(`/${routeName}/${newSlideIndex}`);
  }

  return (
    <div>
      {components[slideIndex]}
      <div>
        <button onClick={() => handleSlideChange(-1)}>{'<'}</button>
        {slideLocations}
        <button onClick={() => handleSlideChange(1)}>{'>'}</button>
      </div>
    </div>
  )
}

export default Slideshow;