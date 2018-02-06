import expect from 'expect';
import { Map } from 'immutable';
import {
  recordingIsActive,
  checkingIsActive,
} from 'containers/Learning/Response/actions';
import {
  toggleTarget,
  setQuestion,
  setCheckingResult,
} from '../actions';
import LearningReducer, { initialState } from '../reducer';

describe('LearningReducer', () => {
  it('returns default state if no state with unknow action is provided', () => {
    expect(LearningReducer(undefined, { type: 'adsfva' })).toBe(initialState);
  });

  it('returns default state if state with unknow action is provided', () => {
    expect(LearningReducer(initialState, { type: 'adsfva' })).toBe(initialState);
  });

  describe('sets the recording field for recordingIsActive action', () => {
    it('with provided state', () => {
      const val = true;
      const state = LearningReducer(initialState, recordingIsActive(val));
      expect(state.get('recording')).toBe(val);
    });
    it('without provided state', () => {
      const val = true;
      const state = LearningReducer(undefined, recordingIsActive(val));
      expect(state.get('recording')).toBe(val);
    });
  });

  describe('sets the checking field for checkingIsActive action', () => {
    it('with provided state', () => {
      const val = true;
      const state = LearningReducer(initialState, checkingIsActive(val));
      expect(state.get('checking')).toBe(val);
    });
    it('without provided state', () => {
      const val = true;
      const state = LearningReducer(undefined, checkingIsActive(val));
      expect(state.get('checking')).toBe(val);
    });
  });

  describe('sets the toggleTarget field for toggleTarget action', () => {
    it('with provided state', () => {
      const val = true;
      const state = LearningReducer(initialState, toggleTarget(val));
      expect(state.get('toggleTarget')).toBe(val);
    });
    it('without provided state', () => {
      const val = true;
      const state = LearningReducer(undefined, toggleTarget(val));
      expect(state.get('toggleTarget')).toBe(val);
    });
  });

  describe('sets the toggleTarget field for toggleTarget action', () => {
    it('with provided state', () => {
      const val = true;
      const state = LearningReducer(initialState, toggleTarget(val));
      expect(state.get('toggleTarget')).toBe(val);
    });
    it('without provided state', () => {
      const val = true;
      const state = LearningReducer(undefined, toggleTarget(val));
      expect(state.get('toggleTarget')).toBe(val);
    });
  });

  describe('sets the question field for setQuestion action', () => {
    it('with provided state', () => {
      const obj = {"id":"11","src":"There's no hot water","target":"お湯がありません"};
      const state = LearningReducer(initialState, setQuestion(obj));
      expect(state).toBeA(Map);
      expect(state.get('question')).toBe(obj);
    });
    it('without provided state', () => {
      const obj = { "id":"11","src":"There's no hot water","target":"お湯がありません" };
      const state = LearningReducer(undefined, setQuestion(obj));
      expect(state).toBeA(Map);
      expect(state.get('question')).toBe(obj);
    });
  });


  describe('sets the result field and the response counters for setCheckingResult action', () => {
    it('with provided state', () => {
      const state = LearningReducer(initialState, { type: 'adsfva' }));
      state.set('correctResponses', 1);
      state.set('incorrectResponses', 1);
      const obj = { "OK" };
      const state = LearningReducer(initialState, setCheckingResult(obj));
      expect(state).toBeA(Map);
      expect(state.get('result')).toBe(obj);
      expect(state.get('correctResponses')).toBe(2);
      expect(state.get('incorrectResponses')).toBe(1);
      expect(state.get('result')).toBe(obj);
    });
    it('without provided state', () => {
      const state = LearningReducer(undefined, { type: 'adsfva' }));
      state.set('correctResponses', 1);
      state.set('incorrectResponses', 1);
      const obj = { "OK" };
      const state = LearningReducer(undefined, setCheckingResult(obj));
      expect(state).toBeA(Map);
      expect(state.get('result')).toBe(obj);
      expect(state.get('correctResponses')).toBe(2);
      expect(state.get('incorrectResponses')).toBe(1);
      expect(state.get('result')).toBe(obj);
    });
  });
});
