import React from 'react';

import Caller from '../../../containers/caller/Caller';
import './Call.scss';


function Call() {
  return (
    <div className="call">
      <h2 className="call__title">Call</h2>
      <Caller />
    </div>
  );
}


export default Call;
