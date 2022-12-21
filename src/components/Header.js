import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>The Great 2022 Gingerbread Tournament</h1>
      <nav>
        <NavLink to='/gingerbread'>Home</NavLink>
        <NavLink to='/contestants'>Contestants</NavLink>
        <NavLink to='/houses'>Gingerbread Houses</NavLink>
      </nav>
    </header>
  );
}

export default Header;