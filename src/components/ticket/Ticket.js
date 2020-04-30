import React from 'react';

import './Ticket.scss';


function Ticket(props) {
  return (
    <div className="ticket">
      <h2 className="ticket__text">your number</h2>
      <h1 className="ticket__number">{props.number}</h1>
      <h2 className="ticket__text">has been sent to</h2>
      <h2 className="ticket__text">your phone</h2>
    </div>
  );
}


export default Ticket;
