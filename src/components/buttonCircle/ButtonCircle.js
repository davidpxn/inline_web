import React from 'react';

import './ButtonCircle.scss';


function ButtonCircle(props) {
  const {
    title,
    value,
    handleClick,
    className,
  } = props;

  return (
    <button
      className={`button-circle ${className}`}
      value={value}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}


export default ButtonCircle;
