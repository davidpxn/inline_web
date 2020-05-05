import React from 'react';

import Caller from '../../../containers/caller/Caller';
import './Call.scss';


function Call() {
  return (
    <div className="call">
      <h1 className="call__title">Call</h1>
      <Caller />
    </div>
  );
}


export default Call;
