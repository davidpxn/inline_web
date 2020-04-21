import React from 'react';
import { Link } from 'react-router-dom';

import ButtonText from '../buttonText/ButtonText';

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
          <ButtonText
            text={a.title}
            handleClick={a.handleClick}
            color="black"
            key={a.title}
          />
        ))}
      </ul>
    </header>
  );
}


export default Header;
