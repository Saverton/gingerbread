import React from 'react';

function SlideNav({ slideLocations, handleSlideChange }) {
  return (
    <div className='slide-nav'>
      <button onClick={() => handleSlideChange(-1)}>{'<'}</button>
      {slideLocations}
      <button onClick={() => handleSlideChange(1)}>{'>'}</button>
    </div>
  );
}

export default SlideNav;
