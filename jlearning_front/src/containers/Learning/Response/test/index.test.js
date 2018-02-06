import React from 'react';
import expect, { createSpy } from 'expect';
import uniqueId from 'lodash/uniqueId';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { Controls, mapDispatchToProps } from '../Response';
import { recordResponse, checkResponse } from '../actions';
import { loadQuestion, toggleTarget } from '../../actions'; // eslint-disable-line no-unused-vars

const learning = fromJS({
  question: {},
  correctResponses: 0,
  incorrectResponses: 0,
  recording: false,
  checking: false,
  toggleTarget: false,
  result: {},
});

const props = {
  handleRecord: () => {},
  handleCheck: () => {},
  handleToggleTarget: () => {},
  handleAnother: () => {},
  learning,
};

describe('Controls', () => {
  it('renders without errors with default initial props.learning values', () => {
    shallow(<Controls {...props} />);
  });
  it('renders without errors with props.learning.recording=true', () => {
    const recordingProps = {
      ...props,
      learning: learning.set('recording', true),
    };
    shallow(<Controls {...recordingProps} />);
  });
  it('renders without errors with props.learning.checking=true', () => {
    const checkingProps = {
      ...props,
      learning: learning.set('checking', true),
    };
    shallow(<Controls {...checkingProps} />);
  });
  it('renders without errors with props.learning.toggleTarget=true', () => {
    const toggleTargetProps = {
      ...props,
      learning: learning.set('toggleTarget', true),
    };
    shallow(<Controls {...toggleTargetProps} />);
  });
  it('renders without errors with props.learning.result OK', () => {
    const resultOKProps = {
      ...props,
      learning: learning.set('result', {'OK'}),
    };
    shallow(<Controls {...resultOKProps} />);
  });
  it('renders without errors with props.learning.result KO', () => {
    const resultKOProps = {
      ...props,
      learning: learning.set('result', {'KO'}),
    };
    shallow(<Controls {...resultKOProps} />);
  });
});

describe('mapDispatchToProps', () => {
  const dispatch = createSpy();
  const { handleRecord, handleCheck, handleToggleTarget, handleAnother } = mapDispatchToProps(dispatch, props);
  it('handleRecord() dispatches the correct action', () => {
    handleRecord();
    expect(dispatch).toHaveBeenCalledWith(recordResponse(learning));
  });
  it('handleCheck() dispatches the correct action', () => {
    handleCheck();
    expect(dispatch).toHaveBeenCalledWith(checkResponse(learning));
  });
  it('handleToggleTarget() dispatches the correct action', () => {
    handleToggleTarget();
    expect(dispatch).toHaveBeenCalledWith(toggleTarget(true));
  });
  it('handleCheck() dispatches the correct action', () => {
    handleAnother();
    expect(dispatch).toHaveBeenCalledWith(loadQuestion(learning));
  });
});

