/**
 *
 * Asynchronously loads the component for PostsListing
 *
 */

import { lazyLoad } from 'app/utils/loadable';

export const PostsListing = lazyLoad(
  () => import('./index'),
  module => module.PostsListing,
);
