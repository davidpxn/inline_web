import React from 'react';

import { ReactComponent as IconDash } from '../../svg/dash.svg';
import './ButtonFancy.scss';


function ButtonFancy(props) {
  const {
    text,
    handleClick,
    offset, // top or bottom
    color, // black or white
    loading,
    className,
  } = props;


  return (
    <div className={`button-fancy ${className}`}>
      <button
        className={`button-fancy__button button-fancy__button--${color}`}
        onClick={handleClick}
      >
        {loading ? <IconDash className="button-fancy__loading"/> : text}
      </button>
      <div className={`button-fancy__background button-fancy__background--${offset} button-fancy__background--${color}`}></div>
    </div>
  );
}


export default ButtonFancy;
