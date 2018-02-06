import React, { PropTypes } from 'react';
import Statement from 'components/Statement'; // eslint-disable-line no-unused-vars

const style = {
  display: 'flex',
  justifyContent: 'space-around',
};

let styleText = { color: 'black' };

const Question = ({ learning }) => {
  let text = JSON.stringify(learning.get('question').src);
  if (learning.get('toggleTarget') === true) {
    text = JSON.stringify(learning.get('question').target);
  }

  if (learning.get('result') === 'OK') {
    styleText = { color: 'green' };
  } else if (learning.get('result') === 'KO') {
    styleText = { color: 'red' };
  } else {
    styleText = { color: 'black' };
  }

  // alert(text);
  if (typeof (text) !== 'undefined') {
    return (
      <div style={style}>
        <h1 style={styleText}>
          {text.replace(/["]+/g, '')}
        </h1>
        {/* <Statement text={text} /> */}
      </div>
    );
  }
  return null;
};

Question.propTypes = {
  learning: PropTypes.object.isRequired,
};

export default Question;
