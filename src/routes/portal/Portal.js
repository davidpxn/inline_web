import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import Call from './call/Call';
import Users from './users/Users';
import Branches from './branches/Branches';
import Tickets from './tickets/Tickets';

import ButtonText from '../../components/buttonText/ButtonText';
import Alert from '../../components/alert/Alert';
import Navbar from '../../components/navbar/Navbar';

import { UserContext } from '../../contexts/UserContext';
import useApiEffect from '../../hooks/useApiEffect';

import { ReactComponent as IconCaller } from '../../svg/caller.svg';
import { ReactComponent as IconUsers } from '../../svg/users.svg';
import { ReactComponent as IconBranch } from '../../svg/branch.svg';
import { ReactComponent as IconTicket } from '../../svg/ticket.svg';
import { ReactComponent as IconDisplay } from '../../svg/display.svg';

import './Portal.scss';


function Portal(props) {
  const path = props.match.path;
  const { getUser } = useContext(UserContext);
  const { data, loading, error, showAlert, setShowAlert } = useApiEffect(getUser, "Error while loading the portal", []);


  switch (props.history.location.pathname) {
    case '/portal/tickets':
      return <Tickets/>;
    default:
      break;
  }


  return (
    <div className="portal">
      <Navbar
        tabs={[
          {
            title: 'call',
            path: '/portal/call',
            icon: <IconCaller className="navbar__tab__icon"/>,
          },
          {
            title: 'users',
            path: '/portal/users',
            icon: <IconUsers className="navbar__tab__icon"/>,
          },
          {
            title: 'branches',
            path: '/portal/branches',
            icon: <IconBranch className="navbar__tab__icon"/>,
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
            color="blue"
          >
            <IconTicket className="button-text__icon"/>
          </ButtonText>
          <ButtonText
            text="display"
            icon="tv"
            handleClick={() => window.open(`${path}/display`, '_blank')}
            color="blue"
          >
            <IconDisplay className="button-text__icon"/>
          </ButtonText>
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
        open={showAlert}
        onClose={() => setShowAlert(false)}
      />
    </div>
  );
}


export default Portal;
