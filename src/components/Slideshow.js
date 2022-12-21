import React from 'react';
import { useNavigate } from 'react-router-dom';
import SlideNav from './SlideNav';

function Slideshow({ components, slideIndex, routeName }) {
  const slideLocations = components.map(
    (_, index) => <span key={`slide-index-${index}`} className='slide-map'>{index === slideIndex ? ' O ' : ' o '}</span>
  );
  const navigate = useNavigate();

  function handleSlideChange(change) {
    let newSlideIndex = (slideIndex + change) % components.length;
    if (newSlideIndex < 0)
      newSlideIndex = components.length - 1;
    navigate(`/${routeName}/${newSlideIndex}`);
  }

  return (
    <div className='slideshow'>
      <SlideNav slideLocations={slideLocations} handleSlideChange={handleSlideChange} />
      {components[slideIndex]}
      <SlideNav slideLocations={slideLocations} handleSlideChange={handleSlideChange} />
    </div>
  )
}

export default Slideshow;