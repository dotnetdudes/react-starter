import { exampleFeatureActions as actions } from '.';
import { call, put, takeLatest, delay } from 'redux-saga/effects';
import ExampleApiManager from 'app/services/example/exampleApiManager';

function* fetchPosts(action) {
  console.log('saga');
  try {
    const API = ExampleApiManager.getInstance().api;
    for (let i = 0; i < 5; i += 1) {
      try {
        const response = yield call(API.fetchPosts);
        if (response.ok) {
          yield put(actions.fetchPostsSuccess(response.data));
          break;
        } else if (i >= 4) {
          yield put(actions.fetchPostsFailure(response.data.error));
        } else {
          yield delay(1000);
        }
      } catch (error: any) {
        yield put(actions.fetchPostsFailure(error.message));
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export function* exampleFeatureSaga() {
  yield takeLatest(actions.fetchPostsInit.type, fetchPosts);
}
