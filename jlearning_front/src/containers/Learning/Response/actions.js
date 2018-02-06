// DAF: todavia no se usan
/**
 * Learning Response actions
 */
import {
  RECORD_RESPONSE,
  CHECK_RESPONSE,
  RECORDING_IS_ACTIVE,
  CHECKING_IS_ACTIVE,
} from './constants';

const action = type => payload => ({ type, payload });

export const recordResponse = action(RECORD_RESPONSE);
export const checkResponse = action(CHECK_RESPONSE);
export const recordingIsActive = action(RECORDING_IS_ACTIVE);
export const checkingIsActive = action(CHECKING_IS_ACTIVE);
