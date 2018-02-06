import React from 'react';
import { shallow } from 'enzyme';
import { Learning } from '../';

const props = {
  question: {"id":"5","target":"Tengo sed","src":"I'm thirsty"},
  correctResponses: 0,
  incorrectResponses: 0,
  recording: false,
  checking: false,
  toggleTarget: false,
  result: {},
};


test('Learning renders without errors', () => {
  shallow(<Learning {...props} />);
});

test('Learning renders without errors with different result summary', () => {
  const newProps = {
    ...props,
    correctResponses: 10,
    incorrectResponses: 20,
  };
  shallow(<Learning {...newProps} />);
});
