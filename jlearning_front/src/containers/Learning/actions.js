/**
 * Learning actions
 */

import {
  LOAD_QUESTION,
  SET_QUESTION,
  TOGGLE_TARGET,
  SET_CHECKING_RESULT,
} from './constants';

const action = type => payload => ({ type, payload });

export const loadQuestion = action(LOAD_QUESTION);
export const setQuestion = action(SET_QUESTION);
export const toggleTarget = action(TOGGLE_TARGET);
export const setCheckingResult = action(SET_CHECKING_RESULT);
