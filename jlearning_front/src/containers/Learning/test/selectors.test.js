import { fromJS } from 'immutable';
import rootSelector, {
  selectCorrectResponses,
  selectIncorrectResponses,
  selectRecording,
  selectChecking,
  selectToggleTarget,
  selectQuestion,
  selectResult,
} from '../selectors';

const question = {};
const correctResponses = 0;
const incorrectResponses = 0;
const recording = false;
const checking = false;
const toggleTarget = false;
const result = {};
const s1 = fromJS({
});
const globalState = fromJS({
  s1,
});
const learning = fromJS({
  question: {},
  correctResponses: 0,
  incorrectResponses: 0,
  recording: false,
  checking: false,
  toggleTarget: false,
  result: {},
});
const state = fromJS({
  global: globalState,
  learning,
});

test('rootSelector selects the `learning` from the root state', () => {
  expect(rootSelector()(state)).toBe(learning);
});

test('selectCorrectResponses() selects state.learning.correctResponses', () => {
  expect(selectCorrectResponses()(state)).toBe(correctResponses);
});

test('selectIncorrectResponses() selects state.learning.incorrectResponses', () => {
  expect(selectIncorrectResponses()(state)).toBe(incorrectResponses);
});

test('selectRecording() selects state.learning.recording', () => {
  expect(selectRecording()(state)).toBe(recording);
});

test('selectChecking() selects state.learning.checking', () => {
  expect(selectChecking()(state)).toBe(checking);
});

test('selectToggleTarget() selects state.learning.toggleTarget', () => {
  expect(selectToggleTarget()(state)).toBe(toggleTarget);
});

// DAF: esto puede estar mal y que las pruebas sean como las anteriores
describe('selectQuestion()', () => {
  it('selects a question object', () => {
    const selector = selectQuestion();
    expect(selector(state)).toBeInstanceOf(Object);
  });
});

describe('selectResult()', () => {
  it('selects a test (a response) result object', () => {
    const selector = selectResult();
    expect(selector(state)).toBeInstanceOf(Object);
  });
});


