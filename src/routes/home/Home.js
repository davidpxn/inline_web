import React, { useState, useContext } from 'react';

import Form from '../../containers/form/Form';
import MultiForm from '../../containers/multiForm/MultiForm';
import Modal from '../../components/modal/Modal';
import Header from '../../components/header/Header';

import { UserContext } from '../../contexts/UserContext';
import mascot_lookleft from '../../img/mascot_lookleft.png';
import './Home.scss';


function Home(props) {
  const { loginUser, signupUser } = useContext(UserContext);

  const [signupOpen, setSignupOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);


  return (
    <div className="home" id="home">
      <Header
        actions={[
          { title: "login", handleClick: () => setLoginOpen(true) },
          { title: "signup", handleClick: () => setSignupOpen(true) },
        ]}
      />
      <div className="welcome">
        <div className="welcome__text">
          <h1 className="welcome__heading">
            <span>welcome<br /></span>
            <span>to</span> <span>inline</span> <span>.</span>
          </h1>
          <h2 className="welcome__subheading">
            <span>Modern web-based <br /></span>
            <span>queue management system </span>
          </h2>
        </div>
        <img
          className="welcome__img"
          src={mascot_lookleft}
          alt=""
        />
      </div>
      <Modal
        title="Signup"
        open={signupOpen}
        onClose={() => setSignupOpen(false)}
        parentID="home"
      >
        <MultiForm
          submitAction={signupUser}
          onSuccess={() => props.history.replace('/portal')}
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
      <Modal
        title="Login"
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        parentID="home"
      >
        <Form
          submitAction={loginUser}
          onSuccess={() => props.history.replace('/portal')}
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
