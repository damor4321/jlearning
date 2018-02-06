import { fork, cancel, call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
import { api } from 'main/config';
import request from 'utils/request';
import { LOAD_QUESTION } from './constants';
import { setQuestion, setCheckingResult } from './actions';
import { setRecording, setChecking } from './Response/actions'; // eslint-disable-line no-unused-vars
import { recordResponseStart, recordResponseStop } from './Response/sagas';
import { RECORD_RESPONSE, CHECK_RESPONSE } from './Response/constants'; // eslint-disable-line no-unused-vars

let watcher = null;

// DAF: Funciones SAGAS
function* loadQuestion(action) { // eslint-disable-line no-unused-vars
  const id = Math.floor(Math.random() * (48));
  const url = `${api.url}${api.path.question}/${id}`;
  let data = '';
  try {
    data = yield call(request, url, null, 'get', null, null);
  } catch (err) {
    yield call(alert, 'Ocurrio un error: ');
    yield call(alert, err.toSource());
  }
  // DAF: las ACCIONES setQuestion y setRecording cambian LOS ESTADOS.
  // yield call(alert, data.res.text);
  // Este JSON.parse hay que hacerlo porque nuestra API **NO ES ESTANDAR**
  yield put(setQuestion(JSON.parse(data.res.text))); // Accion del container Question
  // yield put(setRecording(false)); // DAF: really not necesary // Accion del container Learning
  // yield put(setChecking(false)); // Accion del container Learning
  yield put(setCheckingResult({})); // Accion del container Learning
  // yield call(alert, '2bye');
}

function* onLocationChange(action) {
  if (action.payload.pathname !== '/learning') {
    yield cancel(watcher);
    watcher = null;
  }
}

function* actionsWatcher() {
  yield fork(takeLatest, LOCATION_CHANGE, onLocationChange);
  yield fork(takeLatest, LOAD_QUESTION, loadQuestion);
  yield fork(takeLatest, RECORD_RESPONSE, recordResponseStart);
  yield fork(takeLatest, CHECK_RESPONSE, recordResponseStop);
}

function* main() {
  // Do not execute any code if watcher is already is expensening
  if (watcher) return;

  // start the SAVE action watcher
  watcher = yield fork(actionsWatcher);
}

export default [
  loadQuestion,
  main,
];
