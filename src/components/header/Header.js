import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/logo_yellow.png';
import './Header.scss';


function Header(props) {
  const {
    actions,
  } = props;


  return (
    <header className="header">
      <Link to="/">
        <img
          className="header__logo"
          src={logo}
          alt="inline logo"
        />
      </Link>
      <ul className="header__actions">
        {actions.map((a) => (
          <li className="header__action-container" key={a.title}>
            <button className="header__action" onClick={a.handleClick}>{a.title}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}


export default Header;
