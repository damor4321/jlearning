import { createSelector } from 'reselect';

const rootSelector = () => state => state.get('learning');

export default rootSelector;

export const selectCorrectResponses = () => createSelector(
  rootSelector(),
  learning => learning.get('correctResponses')
);

export const selectIncorrectResponses = () => createSelector(
  rootSelector(),
  learning => learning.get('incorrectResponses')
);

export const selectRecording = () => createSelector(
  rootSelector(),
  learning => learning.get('recording')
);

export const selectChecking = () => createSelector(
  rootSelector(),
  learning => learning.get('checking')
);

export const selectToggleTarget = () => createSelector(
  rootSelector(),
  learning => learning.get('toggleTarget')
);

export const selectQuestion = () => createSelector(
  rootSelector(),
  learning => learning.get('question')
);

export const selectResult = () => createSelector(
  rootSelector(),
  learning => learning.get('result')
);

export const selectLearning = () => createSelector(
  rootSelector(),
  learning => learning
);
