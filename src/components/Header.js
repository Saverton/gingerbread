import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>The Great 2022 Gingerbread Tournament</h1>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/contestants/1'>Contestants</NavLink>
        <NavLink to='/houses/1'>Gingerbread Houses</NavLink>
      </nav>
    </header>
  );
}

export default Header;