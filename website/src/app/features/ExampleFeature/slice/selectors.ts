import { initialState } from '.';
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';

const selectSlice = (state: RootState) => state.exampleFeature || initialState;

export const selectExampleFeature = createSelector(
  [selectSlice],
  state => state,
);
