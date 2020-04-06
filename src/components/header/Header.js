import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/logo.png';
import './Header.scss';


function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__home">
        <img
          className="header__logo"
          src={logo}
          alt="inline logo"
        />
      </Link>
    </header>
  );
}


export default Header;
