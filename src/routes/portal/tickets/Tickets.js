import React, { useContext, useState } from 'react';
import Fullscreen from "react-full-screen";
import status from 'http-status-codes';

import { UserContext } from '../../../contexts/UserContext';
import useSocket from '../../../hooks/useSocket';
import { emitGetTicket } from '../../../api/socketApi';

import Numpad from '../../../containers/numpad/Numpad';
import Alert from '../../../components/alert/Alert';
import Modal from '../../../components/modal/Modal';
import Ticket from '../../../components/ticket/Ticket';

import { ReactComponent as IconFullscreen } from '../../../svg/fullscreen.svg';
import './Tickets.scss';


function Tickets() {
  const [fullscreen, setFullscreen] = useState(false);
  const [showTicket, setShowTicket] = useState(false);
  const [ticketNumber, setTicketNumber] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const { user } = useContext(UserContext);
  const {
    socket,
    loading,
    setLoading,
    error,
    setError,
  } = useSocket([]);


  function getTicket(phone, numpadCallback) {
    if (phone.length !== 7) {
      setError('Please enter a valid phone number');
      setShowAlert(true);
      return;
    }
    
    setLoading(true);

    emitGetTicket(socket, phone, (result) => {
      setLoading(false);

      if (result.statusCode !== status.OK) {
        setError('Please try again');
        setShowAlert(true);
        console.error(result.error);
      } else {
        setTicketNumber(result.number);
        setShowTicket(true);
        numpadCallback();
      }
    });
  }

  
  return (
    <Fullscreen
      enabled={fullscreen}
      onChange={fullscreen => setFullscreen(fullscreen)}
    >
      <div className="tickets" id="tickets">
        <header className="tickets__header">
          <div className="tickets__company">
            <h1 className="tickets__company__name">{user.companyName}</h1>
            <h2 className="tickets__company__branch">{user.branchName}</h2>
          </div>
          {!fullscreen &&
            <button className="tickets__fullscreen-container">
              <IconFullscreen className="tickets__fullscreen" onClick={() => setFullscreen(true)} />
            </button>
          }
        </header>
        <Numpad
          action={getTicket}
          loading={loading}
        />
      </div>
      <Modal
        title="Your number"
        open={showTicket}
        onClose={() => setShowTicket(false)}
        autoHideDuration={5000}
        parentID="tickets"
      >
        <Ticket number={ticketNumber}/>
      </Modal>
      <Alert
        type="info"
        text={error}
        center={true}
        open={showAlert}
        onClose={() => setShowAlert(false)}
      />
    </Fullscreen>
  );
}


export default Tickets;
