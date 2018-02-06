import React, { PropTypes } from 'react';
import OkIcon from 'material-ui/svg-icons/action/thumb-up';
import KoIcon from 'material-ui/svg-icons/action/thumb-down';
import { redA700, lightGreen800 } from 'material-ui/styles/colors'; // eslint-disable-line no-unused-vars

const ResultIcon = (props) => {
  const {
    correct,
  } = props;

  if (correct === 'true') {
    return (
      <OkIcon
        color={lightGreen800}
        hoverColor={lightGreen800}
        style={{
          cursor: 'pointer',
          width: 65,
          height: 65,
        }}
      />
    );
  }

  return (
    <KoIcon
      color={redA700}
      hoverColor={redA700}
      style={{
        cursor: 'pointer',
        width: 65,
        height: 65,
      }}
    />
  );
};

ResultIcon.propTypes = {
  correct: PropTypes.string,
};

export default ResultIcon;
