import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import useApi from '../../hooks/useApi';
import { UserContext } from '../../contexts/UserContext';

import { ReactComponent as IconLogout } from '../../svg/logout.svg';
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
        {props.tabs.map(tab => (
          <li key={tab.title}>
            <NavLink
              className="navbar__tab"
              activeClassName="navbar__tab--selected"
              exact to={tab.path}
              replace
            >
              {tab.icon}
              <span className="navbar__tab__title">{tab.title}</span>
            </NavLink>
          </li>
        ))}
        <li
          className="navbar__tab"
          onClick={handleLogout}
        >
          <IconLogout />
          <span className="navbar__tab__title">logout</span>
        </li>
      </ul>
    </nav>
  );
}


export default Navbar;
