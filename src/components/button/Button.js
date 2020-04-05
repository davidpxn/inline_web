import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Button.scss';


function Button(props) {
  const {
    text,
    form,
    handleClick,
    offset, // top or bottom
    color, // turq or blue
    loading,
  } = props;


  return (
    <div className="button">
      <button
        className={`button__button button__button--${color}`}
        form={form}
        onClick={handleClick}
      >
        {loading ? <FontAwesomeIcon icon="slash" size="xs" spin /> : text}
      </button>
      <div className={`button__background button__background--${offset} button__background--${color}`}></div>
    </div>
  );
}


export default Button;
