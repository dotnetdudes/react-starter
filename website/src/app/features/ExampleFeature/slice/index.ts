import { exampleFeatureSaga } from './saga';
import { ExampleFeatureState } from './types';
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'app/utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'app/utils/redux-injectors';
import { PostType } from 'app/services/example/types';

export const initialState: ExampleFeatureState = {
  posts: [],
  loading: false,
  error: false,
  errorMessage: null,
};

const slice = createSlice({
  name: 'exampleFeature',
  initialState,
  reducers: {
    fetchPostsInit(state) {
      state.loading = false;
      state.error = false;
      state.errorMessage = null;
    },
    fetchPostsSuccess(state, action: PayloadAction<Array<PostType>>) {
      state.posts = action.payload;
      state.loading = false;
      state.error = false;
      state.errorMessage = null;
    },
    fetchPostsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = true;
      state.errorMessage = action.payload;
    },
    resetPostsState(state) {
      state.posts = [];
      state.loading = false;
      state.error = false;
      state.errorMessage = null;
    },
  },
});

export const { actions: exampleFeatureActions } = slice;

export const useExampleFeatureSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: exampleFeatureSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useExampleFeatureSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
