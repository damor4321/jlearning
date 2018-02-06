// DAF: todavia no se utiliza pero se utilizara cuando implementemos
// lo que sigue al checking de la respuesta
import { fromJS } from 'immutable';
import uniqueId from 'lodash/uniqueId';
import {
  RECORDING_IS_ACTIVE,
  CHECKING_IS_ACTIVE,
} from './constants';

export const initialState = () => fromJS({
  id: 0,
  recording: false,
  checking: false,
});

const reducer = (state = initialState(), action) => {
  const { type, payload } = action;
  switch (type) {
    case RECORDING_IS_ACTIVE:
      return state.set('recording', payload);
    case CHECKING_IS_ACTIVE:
      return state.set('checking', payload);
    default:
      return state;
  }
};

export default reducer;
