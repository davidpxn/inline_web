import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './ButtonFancy.scss';


function ButtonFancy(props) {
  const {
    text,
    handleClick,
    offset, // top or bottom
    color, // turq or blue
    loading,
    className,
  } = props;


  return (
    <div className={`button-fancy ${className}`}>
      <button
        className={`button-fancy__button button-fancy__button--${color}`}
        onClick={handleClick}
      >
        {loading ? <FontAwesomeIcon icon="slash" size="xs" spin /> : text}
      </button>
      <div className={`button-fancy__background button-fancy__background--${offset} button-fancy__background--${color}`}></div>
    </div>
  );
}


export default ButtonFancy;
