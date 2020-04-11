import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Button.scss';


function Button(props) {
  const {
    text,
    handleClick,
    color, // red or black
    fill,
    loading,
    className,
  } = props;


  return (
    <button
      className={`button button--${color}${fill ? '--fill' : ''} ${className}`}
      onClick={handleClick}
    >
      {loading ? <FontAwesomeIcon icon="slash" size="xs" spin /> : text}
    </button>
  );
}


export default Button;
