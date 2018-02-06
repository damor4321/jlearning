import React, { PropTypes } from 'react';
import Toggle from 'material-ui/Toggle';
import { blue300, blue700 } from 'material-ui/styles/colors'; // eslint-disable-line no-unused-vars

const ToggleButton = (props) => {
  const {
    onToggle,
    toggled,
  } = props;

  const style = {
    toggle: {
      marginBottom: 25,
    },
    thumbOff: {
      backgroundColor: 'grey',
    },
    trackOff: {
      backgroundColor: blue300,
    },
    thumbSwitched: {
      backgroundColor: blue300,
    },
    trackSwitched: {
      backgroundColor: blue700,
    },
  };


  return (
    <Toggle
      onToggle={onToggle}
      toggled={toggled}
      thumbStyle={style.thumbOff}
      trackStyle={style.trackOff}
      thumbSwitchedStyle={style.thumbSwitched}
      trackSwitchedStyle={style.trackSwitched}
    />
  );
};

ToggleButton.propTypes = {
  onToggle: PropTypes.func,
  toggled: PropTypes.bool,
};

export default ToggleButton;
