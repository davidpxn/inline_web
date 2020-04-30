import React from 'react';

import useSocket from '../../../hooks/useSocket';
import { listenNewCall } from '../../../api/socketApi';

import './Display.scss';


function Display() {
  const handleNewCall = (data) => {
    setBranchData(prevData => ({
      ...prevData, current: data.current
    }));
  }

  const {
    loading,
    setLoading,
    error,
    setError,
    branchData,
    setBranchData
  } = useSocket([], [listenNewCall(handleNewCall)]);

  return (
    <div className="display">
      <h1 className="display__number">{branchData.current}</h1>
    </div>
  );
}


export default Display;
