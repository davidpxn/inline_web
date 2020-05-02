import React from 'react';

import './TextboxCall.scss';


function TextboxCall(props) {
  const {
    title,
    text,
    subtext,
    color,
    textColor,
  } = props;


  return (
    <div className="textbox" style={{ backgroundColor: color }}>
      <h3 className="textbox__title" style={{ color: textColor }}>{title}</h3>
      <h4 className="textbox__text" style={{ color: textColor }}>{text}</h4>
      <h5 className="textbox__subtext" style={{ color: textColor }}>{subtext}</h5>
    </div>
  );
}


export default TextboxCall;
