import React, { PropTypes } from 'react';
import Icon from 'material-ui/svg-icons/action/autorenew';
import { blue300, blue700 } from 'material-ui/styles/colors';

const AnotherIcon = (props) => {
  const { onClick } = props;
  return (
    <Icon
      color={blue300}
      hoverColor={blue700}
      onClick={onClick}
      style={{
        cursor: 'pointer',
        width: 80,
        height: 80,
      }}
    />
  );
};

AnotherIcon.propTypes = {
  onClick: PropTypes.func,
};

export default AnotherIcon;
