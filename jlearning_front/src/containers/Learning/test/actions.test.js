import expect from 'expect';
import {
  LOAD_QUESTION,
  SET_QUESTION,
  TOGGLE_TARGET,
  SET_CHECKING_RESULT,
} from '../constants';
import {
  loadQuestion,
  setQuestion,
  toggleTarget,
  setCheckingResult,
} from '../actions';

import {
  RECORDING_IS_ACTIVE,
  CHECKING_IS_ACTIVE,
} from '../Response/constants';
import {
  recordingIsActive,
  checkingIsActive,
} from '../Response/actions';

const actionsMap = {
  loadQuestion: {
    name: 'loadQuestion',
    method: loadQuestion,
    constant: LOAD_QUESTION,
  },
  setQuestion: {
    name: 'setQuestion',
    method: setQuestion,
    constant: SET_QUESTION,
  },
  toggleTarget: {
    name: 'toggleTarget',
    method: toggleTarget,
    constant: TOGGLE_TARGET,
  },
  setCheckingResult: {
    name: 'setCheckingResult',
    method: setCheckingResult,
    constant: SET_CHECKING_RESULT,
  },
  recordingIsActive: {
    name: 'recordingIsActive',
    method: recordingIsActive,
    constant: RECORDING_IS_ACTIVE,
  },
  checkingIsActive: {
    name: 'checkingIsActive',
    method: checkingIsActive
    constant: CHECKING_IS_ACTIVE,
  },
};

Object.keys(actionsMap).forEach((key) => {
  const { method, name, constant } = actionsMap[key];
  describe(`action ${name}`, () => {
    it('returns the right type', () => {
      expect(method().type).toBe(constant);
    });
    it('sets the first argument to the payload property', () => {
      const target = {};
      expect(method(target).payload).toBe(target);
    });
  });
});
