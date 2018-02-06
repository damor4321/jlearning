import React, { PropTypes } from 'react';
import Icon from 'material-ui/svg-icons/action/record-voice-over';
import { blue300, blue700 } from 'material-ui/styles/colors'; // eslint-disable-line no-unused-vars

const RecorderIcon = (props) => {
  const {
    onClick,
    color,
    hoverColor,
  } = props;

  return (
    <Icon
      color={color}
      hoverColor={hoverColor}
      onClick={onClick}
      style={{
        cursor: 'pointer',
        width: 65,
        height: 65,
      }}
    />
  );
};

RecorderIcon.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.obj,
  hoverColor: PropTypes.obj,
};

export default RecorderIcon;
