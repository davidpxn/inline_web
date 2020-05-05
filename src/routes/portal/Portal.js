import React, { useContext } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Call from './call/Call';
import Tickets from './tickets/Tickets';
import Display from './display/Display';
import Dashboard from './dashboard/Dashboard';

import ButtonIcon from '../../components/buttonIcon/ButtonIcon';
import Alert from '../../components/alert/Alert';
import Navbar from '../../components/navbar/Navbar';

import { UserContext } from '../../contexts/UserContext';
import useApiEffect from '../../hooks/useApiEffect';

import { ReactComponent as IconDashboard } from '../../svg/home.svg';
import { ReactComponent as IconCaller } from '../../svg/caller.svg';
import { ReactComponent as IconUsers } from '../../svg/users.svg';
import { ReactComponent as IconBranch } from '../../svg/branch.svg';
import { ReactComponent as IconTicket } from '../../svg/ticket.svg';
import { ReactComponent as IconDisplay } from '../../svg/display.svg';
import { ReactComponent as IconServices } from '../../svg/services.svg';
import { ReactComponent as IconStats } from '../../svg/stats.svg';
import { ReactComponent as IconProfile } from '../../svg/user.svg';
import { ReactComponent as IconSettings } from '../../svg/settings.svg';

import logo from '../../img/logo_black.png';
import './Portal.scss';


function Portal(props) {
  const path = props.match.path;
  const { getUser } = useContext(UserContext);
  const { data, loading, error, showAlert, setShowAlert } = useApiEffect(getUser, "Error while loading the portal", []);


  switch (props.history.location.pathname) {
    case '/portal/tickets':
      return <Tickets />;
    case '/portal/display':
      return <Display />;
    default:
      break;
  }


  return (
    <div className="portal">
      <div className="portal__header">
        <Link className="portal__header-logo" to="/portal/" replace>
          <img
            src={logo}
            alt="inline logo"
          />
        </Link>
        <div className="portal__header-company">
          <h1 className="portal__header-companyName">{data.companyName}</h1>
          <h2 className="portal__header-companyBranch">{data.branchName}</h2>
        </div>
        <div className="portal__header-buttons">
          <ButtonIcon
            icon={<IconTicket />}
            title="Tickets"
            handleClick={() => window.open(`${path}/tickets`, '_blank')}
          >
          </ButtonIcon>
          <ButtonIcon
            icon={<IconDisplay />}
            title="Display"
            handleClick={() => window.open(`${path}/display`, '_blank')}
          >
          </ButtonIcon>
        </div>
      </div>
      <div className="portal__body">
        <Navbar
          tabs={[
            {
              title: 'dashboard',
              path: '/portal/',
              icon: <IconDashboard />,
            },
            {
              title: 'call',
              path: '/portal/call',
              icon: <IconCaller />,
            },
            {
              title: 'users',
              path: '/portal/users',
              icon: <IconUsers />,
            },
            {
              title: 'branches',
              path: '/portal/branches',
              icon: <IconBranch />,
            },
            {
              title: 'services',
              path: '/portal/services',
              icon: <IconServices />,
            },
            {
              title: 'stats',
              path: '/portal/stats',
              icon: <IconStats />,
            },
            {
              title: 'profile',
              path: '/portal/profile',
              icon: <IconProfile />,
            },
            {
              title: 'settings',
              path: '/portal/settings',
              icon: <IconSettings />,
            },
          ]}
        />
        <Switch>
          <Route exact path={`${path}/call`} component={Call} />
          <Route component={Dashboard} />
        </Switch>
      </div>
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
