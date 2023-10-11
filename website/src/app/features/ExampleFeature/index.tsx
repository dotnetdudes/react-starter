/**
 *
 * ExampleFeature
 *
 */
import { messages } from './messages';
import { useExampleFeatureSlice } from './slice';
import { selectExampleFeature } from './slice/selectors';
import { PostsListing } from './components/PostsListing';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'app/components/Loader';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export function ExampleFeature() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const { actions } = useExampleFeatureSlice();
  const dispatch = useDispatch();
  const { posts, loading, error, errorMessage } =
    useSelector(selectExampleFeature);

  React.useEffect(() => {
    dispatch(actions.fetchPostsInit());
  }, [actions, dispatch]);

  if (loading) return <Loader />;

  return (
    <>
      {error ? (
        <Alert severity="error">
          <AlertTitle>{t(...messages.error())}</AlertTitle>
          {errorMessage}
        </Alert>
      ) : (
        <PostsListing posts={posts} />
      )}
    </>
  );
}
