import { fromJS } from 'immutable';
import {
  SET_QUESTION,
  TOGGLE_TARGET,
  SET_CHECKING_RESULT,
} from './constants';

import {
  RECORDING_IS_ACTIVE,
  CHECKING_IS_ACTIVE,
} from './Response/constants';

export const initialState = fromJS({
  question: {},
  correctResponses: 0,
  incorrectResponses: 0,
  recording: false,
  checking: false,
  toggleTarget: false,
  result: {},
});

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  // alert(type);
  switch (type) {
    case SET_QUESTION:
      return state.set('question', payload).set('toggleTarget', false);
    case SET_CHECKING_RESULT:
      if (JSON.stringify(payload) === '"OK"') {
        return state.set('result', payload).set('correctResponses', state.get('correctResponses') + 1);
      } else if (JSON.stringify(payload) === '"KO"') {
        return state.set('result', payload).set('incorrectResponses', state.get('incorrectResponses') + 1);
      }
      return state.set('result', payload);
    case RECORDING_IS_ACTIVE:
      return state.set('recording', payload);
    case CHECKING_IS_ACTIVE:
      return state.set('checking', payload);
    case TOGGLE_TARGET:
      return state.set('toggleTarget', !state.get('toggleTarget'));
    default:
      return state;
  }
};

export default reducer;
