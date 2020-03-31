import React from 'react';
import Helmet from 'react-helmet';

import './App.scss';


function App() {
  return (
    <div className="app">
      <Helmet defaultTitle="inline" titleTemplate="inline - %s" />
      <p>inline</p>
    </div>
  );
}


export default App;
