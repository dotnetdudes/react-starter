import { initialState } from '.';
import { generateTheme } from '../themes';
import { RootState } from 'types';
import { createSelector } from '@reduxjs/toolkit';

export const selectTheme = createSelector(
  [(state: RootState) => state?.theme || initialState],
  theme => {
    // For Theme switching
    if (theme?.selected === 'system') {
      return generateTheme('light');
    }
    return generateTheme(theme?.selected);
  },
);

export const selectThemeKey = createSelector(
  [(state: RootState) => state?.theme || initialState],
  theme => theme.selected,
);
