import React, { useContext, useState } from 'react';
import Fullscreen from "react-full-screen";

import { UserContext } from '../../../contexts/UserContext';

import Numpad from '../../../containers/numpad/Numpad';

import { ReactComponent as IconFullscreen } from '../../../svg/fullscreen.svg';
import './Tickets.scss';


function Tickets() {
  const [fullscreen, setFullscreen] = useState(false);
  const { user } = useContext(UserContext);

  
  return (
    <Fullscreen
      enabled={fullscreen}
      onChange={fullscreen => setFullscreen(fullscreen)}
    >
      <div className="tickets">
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
        <Numpad />
      </div>
    </Fullscreen>
  );
}


export default Tickets;
