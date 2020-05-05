import React, { useState } from 'react';
import status from 'http-status-codes';

import useSocket from '../../hooks/useSocket';
import {
  listenNewCall,
  listenNewTicket,
  listenFinishedTicket,
  listenSkippedTicket,
  emitCallNext,
  emitFinishTicket,
  emitSkipTicket,
} from '../../api/socketApi';

import ButtonCall from '../../components/buttonCall/ButtonCall';
import TextboxCall from '../../components/textboxCall/TextboxCall';
import Alert from '../../components/alert/Alert';

import { ReactComponent as IconNext } from '../../svg/next.svg';
import { ReactComponent as IconDone } from '../../svg/check.svg';
import { ReactComponent as IconSkip } from '../../svg/skip.svg';

import './Caller.scss';


function Caller() {
  const [currentTicket, setCurrentTicket] = useState(null);
  const [stopwatch, setStopwatch] = useState({
    startTime: 0,
    elapsedTime: 0,
    interval: null,
  });
  const [showAlert, setShowAlert] = useState(false);
  const [nextLoading, setNextLoading] = useState(false);
  const [doneLoading, setDoneLoading] = useState(false);
  const [skipLoading, setSkipLoading] = useState(false);


  function startStopwatch() {
    setStopwatch({
      startTime: Date.now(),
      elapsedTime: 0,
      interval: setInterval(() => {
        setStopwatch(prevData => ({
          ...prevData, elapsedTime: Date.now() - prevData.startTime
        }))
      }, 10)
    })
  };


  function resetStopwatch() {
    clearInterval(stopwatch.interval);
    setStopwatch({
      startTime: 0,
      elapsedTime: 0,
      interval: null,
    });
  }


  function formatTime() {
    const elapsedTime = stopwatch.elapsedTime;

    const seconds = ("0" + (Math.floor(elapsedTime / 1000) % 60)).slice(-2);
    const minutes = ("0" + (Math.floor(elapsedTime / 60000) % 60)).slice(-2);
    const hours = ("0" + Math.floor(elapsedTime / 3600000)).slice(-2);

    return `${hours} : ${minutes} : ${seconds}`;
  }


  function handleNext() {
    if (branchData.next === null && currentTicket === null) {
      return;
    }

    setNextLoading(true);
    emitCallNext(socket, currentTicket, (result) => {
      if (result.statusCode !== status.OK) {
        setError('Something went wrong');
        setShowAlert(true);
      } else {
        setBranchData(prevData => ({
          ...prevData, ...result.result
        }));

        setCurrentTicket(result.result.current);
        if (result.result.current !== null) {
          startStopwatch();
        } else {
          resetStopwatch();
        }
      }

      setNextLoading(false);
    });
  }


  function handleDone() {
    if (currentTicket === null) {
      return;
    }

    setDoneLoading(true);
    emitFinishTicket(socket, currentTicket, (result) => {
      if (result.statusCode !== status.OK) {
        setError('Something went wrong');
        setShowAlert(true);
      } else {
        setBranchData(prevData => ({
          ...prevData, ...result.result
        }));

        setCurrentTicket(null);
        resetStopwatch();
      }

      setDoneLoading(false);
    });
  }


  function handleSkip() {
    if (currentTicket === null) {
      return;
    }

    setSkipLoading(true);
    emitSkipTicket(socket, currentTicket, (result) => {
      if (result.statusCode !== status.OK) {
        setError('Something went wrong');
        setShowAlert(true);
      } else {
        setBranchData(prevData => ({
          ...prevData, ...result.result
        }));

        setCurrentTicket(null);
        resetStopwatch();
      }

      setSkipLoading(false);
    });
  }


  const {
    socket,
    loading,
    setLoading,
    error,
    setError,
    branchData,
    setBranchData
  } = useSocket([], [listenNewCall(), listenNewTicket(), listenFinishedTicket(), listenSkippedTicket()]);


  return (
    <div className="caller">
      <TextboxCall
        title="next ticket"
        text={branchData.next}
        color="#adadad"
      />
      <ButtonCall
        text="next"
        icon={<IconNext />}
        color="#4569e0"
        loading={nextLoading}
        handleClick={handleNext}
      />
      <TextboxCall
        title="current ticket"
        text={currentTicket}
        subtext={currentTicket ? formatTime(stopwatch.elapsedTime) : null}
        color="#000000"
        textColor="#ffffff"
      />
      <ButtonCall
        text="done"
        subtext={branchData.done}
        icon={<IconDone />}
        color="#44b842"
        loading={doneLoading}
        handleClick={handleDone}
      />
      <ButtonCall
        text="skip"
        subtext={branchData.skipped}
        icon={<IconSkip />}
        color="#e84b45"
        loading={skipLoading}
        handleClick={handleSkip}
      />
      <TextboxCall
        title="waiting"
        text={branchData.waiting}
        color="#dbdbdb"
      />
      <Alert
        type="error"
        text={error}
        center={true}
        open={showAlert}
        onClose={() => setShowAlert(false)}
      />
    </div>
  );
}


export default Caller;
