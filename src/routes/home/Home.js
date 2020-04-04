import React from 'react';

import Form from '../../containers/form/Form';
import Button from '../../components/button/Button';

import { login } from '../../api/api';

import img from '../../img/home.png';
import './Home.scss';


function Home() {
  async function handleLogin(data) {
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
      result.error = 'Error occured on login. Please try again.';
    }

    return result;
  }


  return (
    <div className="home">
      <div className="welcome">
        <h1 className="welcome__heading">
          welcome <br />
          to <br />
          inline <br />
        </h1>
        <img
          className="welcome__img"
          src={img}
          alt=""
        />
      </div>
      <div>
        <Form
          id="login-form"
          submitAction={handleLogin}
          fields={[
            { name: 'email', type: 'email' },
            { name: 'password', type: 'password' },
          ]}
        />
        <Button form="login-form" text="login" />
        <h3>or</h3>
        <Button text="signup" />
      </div>
    </div>
  );
}


export default Home;
