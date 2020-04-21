import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ButtonText.scss';


function ButtonText(props) {
  const {
    text,
    icon,
    handleClick,
    color, // yellow or black
    className,
  } = props;


  return (
    <button
      className={`button-text button-text--${color} ${className}`}
      onClick={handleClick}
    >
      <div className="button-text__content">
        {icon && <FontAwesomeIcon icon={icon} className="button-text__icon"/>}
        {text}
      </div>
    </button>
  );
}


export default ButtonText;
