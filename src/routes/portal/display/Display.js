import React, { useRef } from 'react';

import useSocket from '../../../hooks/useSocket';
import { listenNewCall } from '../../../api/socketApi';

import Fullscreen from '../../../components/fullscreen/Fullscreen';

import sound from '../../../audio/call.wav'
import './Display.scss';


function Display() {
  const audio = useRef(new Audio(sound))

  const handleNewCall = (data) => {
    setBranchData(prevData => ({
      ...prevData, current: data.current
    }));
    audio.current.play();
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
    <Fullscreen color="white">
      <div className="display">
        <h1 className="display__number">{branchData.current}</h1>
      </div>
    </Fullscreen>
  );
}


export default Display;
