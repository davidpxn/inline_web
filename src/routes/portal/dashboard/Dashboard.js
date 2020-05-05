import React, { useContext } from 'react';

import { UserContext } from '../../../contexts/UserContext';

import mascot from '../../../img/mascot_sideways.png';
import './Dashboard.scss';


function Dashboard() {
  const { user } = useContext(UserContext);
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


  return (
    <div className="dashboard">
      <img
        className="dashboard__mascot"
        src={mascot}
        alt=""
      />
      <div className="dashboard__textbox">
        <h2 className="dashboard__date">
          <span>{days[new Date().getDay()]} </span>
          <span>{new Date().toJSON().slice(0, 10).split('-').reverse().join('/')}</span></h2>
        <h3 className="dashboard__greeting">
          Have a nice day, <br />
          {user.name}
        </h3>
      </div>
      <div className="dashboard__bottom-border"></div>
      <div className="dashboard__right-border"></div>
    </div>
  );
}


export default Dashboard;
