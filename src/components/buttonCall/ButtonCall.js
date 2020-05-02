import React from 'react';

import { ReactComponent as IconDash } from '../../svg/dash.svg';

import './ButtonCall.scss';


function ButtonCall(props) {
  const {
    text,
    subtext,
    icon,
    handleClick,
    color,
    loading,
    className,
  } = props;


  return (
    <button
      className={`button-call ${className}`}
      onClick={handleClick}
      style={{ backgroundColor: color }}
      disabled={loading}
    >
      <h3 className="button-call__text">{text}</h3>
      <div className="button-call__icon">
        {loading ? <IconDash className="button-call__loading" /> : icon}
      </div>
      <h4 className="button-call__subtext">{subtext}</h4>
    </button>
  );
}


export default ButtonCall;
