import React, { useState } from 'react';

import ButtonCircle from '../../components/buttonCircle/ButtonCircle';

import { ReactComponent as IconBack } from '../../svg/back.svg';
import { ReactComponent as IconCheck } from '../../svg/check.svg';
import './Numpad.scss';


function Numpad() {
  const [value, setValue] = useState('');


  function handleButtons(e) {
    const value = e.target.value;
    setValue(prevValue => {
      if (prevValue.length >= 10) {
        return prevValue;
      }

      if (prevValue.length === 3) {
        return `${prevValue} - ${value}`
      } 

      return `${prevValue}${value}`;
    });
  }

  function handleBack() {
    setValue(prevValue => {
      if (prevValue.length === 0) {
        return prevValue;
      }

      if (prevValue.length === 7) {
        return prevValue.slice(0, -4);
      } 

      return prevValue.slice(0, -1); ;
    });
  }


  return (
    <div className="numpad">
      <input
        className="numpad__input"
        type="tel"
        value={value}
        placeholder="enter your phone number"
        readOnly
      />
      <div className="numpad__buttons">
        <ButtonCircle
          title="1"
          value="1"
          handleClick={handleButtons}
        />
        <ButtonCircle
          title="2"
          value="2"
          handleClick={handleButtons}
        />
        <ButtonCircle
          title="3"
          value="3"
          handleClick={handleButtons}
        />
        <ButtonCircle
          title="4"
          value="4"
          handleClick={handleButtons}
        />
        <ButtonCircle
          title="5"
          value="5"
          handleClick={handleButtons}
        />
        <ButtonCircle
          title="6"
          value="6"
          handleClick={handleButtons}
        />
        <ButtonCircle
          title="7"
          value="7"
          handleClick={handleButtons}
        />
        <ButtonCircle
          title="8"
          value="8"
          handleClick={handleButtons}
        />
        <ButtonCircle
          title="9"
          value="9"
          handleClick={handleButtons}
        />
        <button className="numpad__icon-container">
          <IconBack className="numpad__icon numpad__icon--back" onClick={handleBack}/>
        </button>
        <ButtonCircle
          title="0"
          value="0"
          handleClick={handleButtons}
        />
        <button className="numpad__icon-container">
          <IconCheck className="numpad__icon numpad__icon--check" />
        </button>
      </div>
    </div >
  );
}


export default Numpad;
