import React, { useState } from 'react';

import Form from '../../containers/form/Form';
import Button from '../../components/button/Button';
import Alert from '../../components/alert/Alert';

import { login } from '../../api/api';

import mascot_lookup from '../../img/mascot_lookup.png';
import logo from '../../img/logo.png';
import './Home.scss';


function Home() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);


  async function handleLogin(data) {
    setErrorMessage(null);
    setLoading(true);

    const result = {
      success: null,
      errors: {},
      error: null,
    };

    try {
      const response = await login(data);
      result.success = response.ok;

      if (!response.ok) {
        for (const e of response.data.errors) {
          result.errors[e.field] = e.error;
        }
      };
    } catch (e) {
      result.error = 'Error occured on login';
      setErrorMessage(result.error);
    }

    setLoading(false);
    return result;
  }


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
            id="login-form"
            submitAction={handleLogin}
            fields={[
              { name: 'email', type: 'email' },
              { name: 'password', type: 'password' },
            ]}
          />
          <div className="auth__buttons">
            <Button
              form="login-form"
              text="login"
              offset="top"
              color="turq"
              loading={loading}
            />
            <h3 className="auth__or">or</h3>
            <Button
              text="signup"
              offset="bottom"
              color="blue"
            />
          </div>
        </div>
      </div>
      <Alert
        type="error"
        text={errorMessage}
      />
    </div>
  );
}


export default Home;
