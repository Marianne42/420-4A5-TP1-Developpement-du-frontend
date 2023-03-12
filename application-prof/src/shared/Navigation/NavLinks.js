import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

function NavLinks(props) {
  return <ul className="nav-links">
    <li>
      <NavLink to="/accueil" exact>Accueil</NavLink>
    </li>
    <li>
      <NavLink to="/" exact>Professeurs</NavLink>
    </li>
    <li>
      <NavLink to="/u1/cours">Cours</NavLink>
    </li>
  </ul>
};

export default NavLinks;