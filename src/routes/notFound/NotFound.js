import React from 'react';

import space from '../../img/space.gif';
import mascot from '../../img/mascot_space.png';
import logo from '../../img/logo_white.png';

import './NotFound.scss';


function NotFound(props) {
  return (
    <div className="not-found" style={{ backgroundImage: `url(${space})` }}>
      <img
        className="not-found__logo"
        src={logo}
        alt="inline logo"
        onClick={() => props.history.push('/')}
      />
      <div className="not-found__mascot-container">
        <img
          className="not-found__mascot"
          src={mascot}
          alt=""
        />
      </div>
      <div className="not-found__text">
        <h1 className="not-found__404">404</h1>
        <h2 className="not-found__message">Oops! Looks like your lost</h2>
      </div>
    </div>
  );
}


export default NotFound;
