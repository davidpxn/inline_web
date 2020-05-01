import React, { useEffect, useState, useContext } from 'react';
import Helmet from 'react-helmet';
import { Route, Switch, useHistory } from 'react-router-dom';

import Home from './routes/home/Home';
import Portal from './routes/portal/Portal';
import NotFound from './routes/notFound/NotFound';

import { UserContext } from './contexts/UserContext';

import './App.scss';


function App() {
  const { verifyUserAuth } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const history = useHistory();


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await verifyUserAuth();
        if (result.ok && history.location.pathname === '/') {
          history.replace('/portal');
        } else if(!result.ok && history.location.pathname.includes('/portal')) {
          history.replace('/');
        }
      } catch (e) {
        history.replace('/');
      }
      setLoading(false);
    };

    fetchData();
  }, [history, verifyUserAuth]);

  
  return (
    <div className="app">
      <Helmet defaultTitle="inline" />
      {!loading &&
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/portal" component={Portal} />
            <Route component={NotFound}/>
          </Switch>
        </main>
      }      
    </div>
  );
}


export default App;
