/**
 *
 * Asynchronously loads the component for ExampleFeature
 *
 */

import { lazyLoad } from 'app/utils/loadable';

export const ExampleFeature = lazyLoad(
  () => import('./index'),
  module => module.ExampleFeature,
);
