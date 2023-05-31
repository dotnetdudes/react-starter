import { ThemeType, ThemeState } from './types';
import { getThemeFromStorage } from '../utils';
import { PayloadAction } from '@reduxjs/toolkit';
import { useInjectReducer } from 'app/utils/redux-injectors';
import { createSlice } from 'app/utils/@reduxjs/toolkit';

export const initialState: ThemeState = {
  selected: getThemeFromStorage() || 'system',
};

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<ThemeType>) {
      state.selected = action.payload;
    },
  },
});

export const { actions: themeActions, reducer } = slice;

export const useThemeSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
