import React, { useContext } from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useApi from '../../hooks/useApi';
import { UserContext } from '../../contexts/UserContext';

import logo from '../../img/logo_grey.png';
import './Navbar.scss';


function Navbar(props) {
  const history = useHistory();
  const { logoutUser } = useContext(UserContext);
  const { fetchData, data, loading, error } = useApi(logoutUser, "Error on logout");


  async function handleLogout() {
    const result = await fetchData();
    
    if (result.ok) {
      history.replace('/');
    }
  }


  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link to="/portal" replace>
            <img
              className="navbar__logo"
              src={logo}
              alt="inline logo"
            />
          </Link>
        </li>
        {props.tabs.map(tab => (
          <li key={tab.title} className="navbar__tab-container">
            <NavLink
              className="navbar__tab"
              activeClassName="navbar__tab--selected"
              exact to={tab.path}
              replace
            >
              <FontAwesomeIcon icon={tab.icon} />
              <span className="navbar__tab-title">{tab.title}</span>
            </NavLink>
          </li>
        ))}
        <li
          className="navbar__tab navbar__logout navbar__tab-container"
          onClick={handleLogout}
        >
          <FontAwesomeIcon icon="sign-out-alt" />
          <span className="navbar__tab-title">logout</span>
        </li>
      </ul>
    </nav>
  );
}


export default Navbar;
