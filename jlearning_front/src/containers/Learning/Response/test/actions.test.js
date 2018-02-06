import expect from 'expect';
import {
  RECORD_RESPONSE,
  CHECK_RESPONSE,
  RECORDING_IS_ACTIVE,
  CHECKING_IS_ACTIVE,
} from '../constants';
import {
  recordResponse,
  checkResponse,
  recordingIsActive,
  checkingIsActive,
} from '../actions';

const actionsMap = {
  recordResponse: {
    name: 'recordResponse',
    method: recordResponse,
    constant: RECORD_RESPONSE,
  },
  checkResponse: {
    name: 'checkResponse',
    method: checkResponse,
    constant: CHECK_RESPONSE,
  },
  recordingIsActive: {
    name: 'recordingIsActive',
    method: recordingIsActive,
    constant: RECORDING_IS_ACTIVE,
  },
  checkingIsActive: {
    name: 'checkingIsActive',
    method: checkingIsActive,
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
