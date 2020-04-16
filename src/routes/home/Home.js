import React, { useState } from 'react';

import Form from '../../containers/form/Form';
import MultiForm from '../../containers/multiForm/MultiForm';
import Modal from '../../components/modal/Modal';
import Header from '../../components/header/Header';

import { login, signup } from '../../api/api';

import mascot_lookup from '../../img/mascot_lookup.png';
import './Home.scss';


function Home(props) {
  const [signupOpen, setSignupOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  
  return (
    <div className="home">
      <Header
        actions={[
          { title: "login", handleClick: () => setLoginOpen(true) },
          { title: "signup", handleClick: () => setSignupOpen(true) },
        ]}
      />
      <div className="welcome">
        <h1 className="welcome__heading">
          welcome <br />
          to <br />
          inline <br />
        </h1>
        <h2 className="welcome__text">
          Modern web-based <br />
          queue management system <br />
        </h2>
        <img
          className="welcome__img"
          src={mascot_lookup}
          alt=""
        />
      </div>
      <Modal open={signupOpen} onClose={() => setSignupOpen(false)}>
        <MultiForm
          submitAction={signup}
          onSuccess={() => props.history.push('/portal')}
          errorMessage="Error occured on signup"
          className="signup-form"
          categories={[
            {
              categoryName: 'user',
              title: 'personal information',
              fields: [
                { name: 'name', title: 'name', type: 'text' },
                { name: 'email', title: 'email', type: 'email' },
                { name: 'password', title: 'password', type: 'password' },
                { name: 'passwordConfirm', title: 'confirm password', type: 'password' },
              ]
            },
            {
              categoryName: 'company',
              title: 'company information',
              fields: [
                { name: 'name', title: 'company name', type: 'text' },
                { name: 'country', title: 'country', type: 'text' },
                { name: 'website', title: 'website', type: 'url' },
              ]
            },
            {
              categoryName: 'branch',
              title: "finally,\nlet's add a branch",
              fields: [
                { name: 'name', title: 'branch name', type: 'text' },
              ]
            }
          ]}
        />
      </Modal>
      <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
        <Form
          submitAction={login}
          onSuccess={() => props.history.push('/portal')}
          title="log in to inline"
          buttonTitle="login"
          errorMessage="Error occured on login"
          fields={[
            { name: 'email', title: 'email', type: 'email' },
            { name: 'password', title: 'password', type: 'password' },
          ]}
          showLogo={true}
          className="login-form"
        />
      </Modal>
    </div >
  );
}


export default Home;
