import React, { PropTypes } from 'react';
import Typist from 'react-typist';

const Statement = (props) => {
  const {
    text,
  } = props;
  alert(text);
  return (
    <Typist>
      <h1>{text.replace(/["]+/g, '')}</h1>
    </Typist>
  );
};

Statement.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Statement;
