import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import Call from './call/Call';
import Users from './users/Users';
import Branches from './branches/Branches';

import ButtonText from '../../components/buttonText/ButtonText';
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
      <div className="portal__header">
        <div className="portal__header-company">
          <h1 className="portal__header-companyName">{data.companyName}</h1>
          <h2 className="portal__header-companyBranch">{data.branchName}</h2>
        </div>
        <div className="portal__header-buttons">
          <ButtonText
            text="tickets"
            icon={['far', 'file-alt']}
            handleClick={() => window.open(`${path}/tickets`, '_blank')}
            color="yellow"
          />
          <ButtonText
            text="display"
            icon="tv"
            handleClick={() => window.open(`${path}/display`, '_blank')}
            color="yellow"
          />
        </div>
      </div>
      <Switch>
        <Route exact path={`${path}/call`} component={Call} />
        <Route exact path={`${path}/users`} component={Users} />
        <Route exact path={`${path}/branches`} component={Branches} />
        <Route component={null} />
      </Switch>
      <Alert
        type="error"
        text={error}
      />
    </div>
  );
}


export default Portal;
