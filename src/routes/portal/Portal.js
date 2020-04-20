import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import Call from './call/Call';
import Users from './users/Users';
import Branches from './branches/Branches';

import Alert from '../../components/alert/Alert';
import Navbar from '../../components/navbar/Navbar';

import { UserContext } from '../../contexts/UserContext';
import useApiEffect from '../../hooks/useApiEffect';

import './Portal.scss';


function Portal(props) {
  const path = props.match.path;
  const { getUser } = useContext(UserContext);
  const { data, loading, error } = useApiEffect(getUser, "Error while loading the portal", []);


  return (
    <div className="portal">
      <Navbar
        tabs={[
          {
            title: 'call',
            path: '/portal/call',
            icon: 'headset',
          },
          {
            title: 'users',
            path: '/portal/users',
            icon: 'user-friends',
          },
          {
            title: 'branches',
            path: '/portal/branches',
            icon: 'store-alt',
          },
        ]}
      />
      <p>{data.companyName}</p>
      <Switch>
        <Route exact path={`${path}/call`} component={Call} />
        <Route exact path={`${path}/users`} component={Users} />
        <Route exact path={`${path}/branches`} component={Branches} />
        <Route component={Call} />
      </Switch>
      <Alert
        type="error"
        text={error}
      />
    </div>
  );
}


export default Portal;
