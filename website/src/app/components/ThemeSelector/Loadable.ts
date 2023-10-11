/**
 *
 * Asynchronously loads the component for ThemeSelector
 *
 */

import { lazyLoad } from 'app/utils/loadable';

export const ThemeSelector = lazyLoad(
  () => import('./index'),
  module => module.ThemeSelector,
);
