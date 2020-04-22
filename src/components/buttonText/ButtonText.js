import React from 'react';

import './ButtonText.scss';


function ButtonText(props) {
  const {
    text,
    handleClick,
    color, // blue or black
    className,
    children,
  } = props;


  return (
    <button
      className={`button-text button-text--${color} ${className}`}
      onClick={handleClick}
    >
      <span className="button-text__content">
        {children}
        {text}
      </span>
    </button>
  );
}


export default ButtonText;
