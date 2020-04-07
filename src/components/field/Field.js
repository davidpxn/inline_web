import React from 'react';

import './Field.scss';


function Field(props) {
  const {
    name,
    title,
    value,
    error,
    type,
    handleChange,
    theme,
  } = props;


  return (
    <div className={`field field--${theme}`}>
      <label className="field__label" htmlFor={name}>{title}</label>
      <input
        className="field__input"
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
      />
      <label className="field__error" htmlFor={name}>{error}</label>
    </div>
  );
}


export default Field;
