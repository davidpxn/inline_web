import React from 'react';

import './Field.scss';


function Field(props) {
  const {
    name,
    value,
    error,
    type,
    handleChange,
  } = props;


  return (
    <div className="field">
      <label className="field__label" htmlFor={name}>{name}</label>
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
