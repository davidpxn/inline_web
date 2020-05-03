import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

import './ButtonIcon.scss';


function ButtonIcon(props) {
  const {
    title,
    icon,
    handleClick,
    className,
  } = props;


  const BlueTooltip = withStyles(() => ({
    tooltip: {
      backgroundColor: '#A5B6FE',
      color: '#ffffff',
      fontSize: "12px",
    },
  }))(Tooltip);


  return (
    <BlueTooltip title={title}>
      <button
        className={`button-icon ${className}`}
        onClick={handleClick}
      >
        {icon}
      </button>
    </BlueTooltip>
  );
}


export default ButtonIcon;
