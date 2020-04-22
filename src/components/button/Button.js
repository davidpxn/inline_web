import React from 'react';

import { ReactComponent as IconDash } from '../../svg/dash.svg';
import './Button.scss';


function Button(props) {
  const {
    text,
    handleClick,
    color, // blue, red or black
    fill,
    loading,
    className,
  } = props;


  return (
    <button
      className={`button button--${color}${fill ? '--fill' : ''} ${className}`}
      onClick={handleClick}
    >
      {loading ? <IconDash className="button__loading"/> : text}
    </button>
  );
}


export default Button;
