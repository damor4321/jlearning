import { call, put } from 'redux-saga/effects'; // eslint-disable-line no-unused-vars
import { api, bauth } from 'main/config'; // eslint-disable-line no-unused-vars
import request from 'utils/request';
import { Recorder } from 'utils/recorder';

import { recordingIsActive, checkingIsActive } from './actions';
import { setCheckingResult } from '../actions';


const recorder = new Recorder(null, true);

export function* recordResponseStart(action) {
  const learning = action.payload; // eslint-disable-line no-unused-vars
  // yield call(alert, 'Comienzo de recordResponseStart ');
  if (learning) {
    recorder.createClient();
    recorder.startRecording();
    yield put(recordingIsActive(true));
    yield put(checkingIsActive(false));
  } else {
    recorder.stopRecording();
    yield put(recordingIsActive(false));
  }
  // yield call(alert, 'Fin de recordResponseStart');
}

export function* recordResponseStop(action) {
  const question = action.payload; // eslint-disable-line no-unused-vars
  const url = `${api.url}${api.path.checkResponse}/${question.get('question').id}`;
  // yield call(alert, 'Comienzo de recordResponseStop');
  // yield call(alert, url);
  if (question) {
    recorder.stopRecording();
    yield put(recordingIsActive(false));
    yield put(checkingIsActive(true));
  }

  let data = '';
  try {
    data = yield call(request, url, null, 'get', null, null);
  } catch (err) {
    yield call(alert, 'Ocurrio un error: ');
    yield call(alert, err.toSource());
  }
  // yield call(alert, data.res.text);
  yield put(recordingIsActive(false));
  yield put(checkingIsActive(false));
  yield put(setCheckingResult(data.res.text)); // Accion del container Question
  // yield call(alert, 'Fin de recordResponseStop');
}

