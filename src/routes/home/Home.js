import React, { useState } from 'react';

import Form from '../../containers/form/Form';
import ButtonFancy from '../../components/buttonFancy/ButtonFancy';

import { login } from '../../api/api';

import mascot_lookup from '../../img/mascot_lookup.png';
import logo from '../../img/logo.png';
import './Home.scss';


function Home() {
  return (
    <div className="home">
      <img
        className="home__logo"
        src={logo}
        alt="inline logo"
      />
      <div className="home__content">
        <div className="welcome">
          <h1 className="welcome__heading">
            welcome <br />
            to <br />
            inline <br />
          </h1>
          <h2 className="welcome__text">
            Easy to use web-based <br />
            queue management <br />
            system <br />
          </h2>
          <img
            className="welcome__img"
            src={mascot_lookup}
            alt=""
          />
        </div>
        <div className="auth">
          <Form
            submitAction={login}
            errorMessage="Error occured on login"
            fields={[
              { name: 'email', type: 'email' },
              { name: 'password', type: 'password' },
            ]}
            buttonType="fancy"
          />
          <h3 className="auth__or">or</h3>
          <ButtonFancy
            text="signup"
            offset="bottom"
            color="blue"
          />
        </div>
      </div>
    </div >
  );
}


export default Home;
