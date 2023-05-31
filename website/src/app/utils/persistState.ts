// @flow
// https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage
// https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e
import type { RootState } from 'types';

export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem('stateSramReg');
    if (serializedState === null) {
      return undefined;
    }
    // $FlowIgnore
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('stateSramReg', serializedState);
  } catch (err) {
    // die
  }
};
