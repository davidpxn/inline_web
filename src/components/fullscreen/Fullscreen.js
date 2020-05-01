import React, { useState } from 'react';
import ReactFullscreen from "react-full-screen";

import { ReactComponent as IconFullscreen } from '../../svg/fullscreen.svg';
import './Fullscreen.scss';


function Fullscreen(props) {
  const {
    color, //black or white
    children
  } = props;

  const [fullscreen, setFullscreen] = useState(false);

  
  return (
    <ReactFullscreen
      enabled={fullscreen}
      onChange={fullscreen => setFullscreen(fullscreen)}
    >
      {!fullscreen &&
        <button className="fullscreen-button-container">
          <IconFullscreen className={`fullscreen-button fullscreen-button--${color}`} onClick={() => setFullscreen(true)} />
        </button>
      }
      {children}
    </ReactFullscreen>
  );
}


export default Fullscreen;
