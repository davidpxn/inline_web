import React, { useContext } from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';

import useApi from '../../hooks/useApi';
import { UserContext } from '../../contexts/UserContext';

import logo from '../../img/logo_black_on_white.png';
import { ReactComponent as IconLogout } from '../../svg/logout.svg';
import { ReactComponent as IconDot } from '../../svg/dot.svg';
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
          <li key={tab.title}>
            <NavLink
              className="navbar__tab"
              activeClassName="navbar__tab--selected"
              exact to={tab.path}
              replace
            >
              {tab.icon}
              <div className="navbar__tab__title-container">
                <IconDot className="navbar__tab__dot"/>
                <span className="navbar__tab__title">{tab.title}</span>
              </div>
            </NavLink>
          </li>
        ))}
        <li
          className="navbar__tab navbar__logout"
          onClick={handleLogout}
        >
          <IconLogout className="navbar__logout__icon"/>
          <span className="navbar__logout__title">logout</span>
        </li>
      </ul>
    </nav>
  );
}


export default Navbar;
