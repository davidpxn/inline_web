import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Button.scss';


function Button(props) {
  const {
    text,
    form,
    handleClick,
    color, // turq or blue
    fill,
    loading,
    type,
    className,
  } = props;


  return (
    <button
      className={`button button--${color}${fill ? '--fill' : ''} ${className}`}
      form={form}
      onClick={handleClick}
      type={type}
    >
      {loading ? <FontAwesomeIcon icon="slash" size="xs" spin /> : text}
    </button>
  );
}


export default Button;
