import expect from 'expect';
import { fromJS } from 'immutable';
import {
  recordingIsActive,
  checkingIsActive,
} from '../actions';
import ResponseReducer, { initialState } from '../reducer';

const payload = fromJS({});

describe('ResponseReducer', () => {
  it('returns default state if no state with unknow action is provided', () => {
    expect(ResponseReducer(undefined, { type: 'adsfva' })).toBe(initialState);
  });

  it('returns default state if state with unknow action is provided', () => {
    expect(ResponseReducer(initialState, { type: 'adsfva' })).toBe(initialState);
  });

  describe('sets the recording field for recordingIsActive action', () => {
    it('with provided state', () => {
      const val = true;
      const state = ResponseReducer(initialState, recordingIsActive(val));
      expect(state.get('recording')).toBe(val);
    });
    it('without provided state', () => {
      const val = true;
      const state = ResponseReducer(undefined, recordingIsActive(val));
      expect(state.get('recording')).toBe(val);
    });
  });

  describe('sets the checking field for checkingIsActive action', () => {
    it('with provided state', () => {
      const val = true;
      const state = ResponseReducer(initialState, checkingIsActive(val));
      expect(state.get('checking')).toBe(val);
    });
    it('without provided state', () => {
      const val = true;
      const state = ResponseReducer(undefined, checkingIsActive(val));
      expect(state.get('checking')).toBe(val);
    });
  });
});
