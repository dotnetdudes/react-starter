import { ThemeType } from './slice/types';

/* istanbul ignore next line */
export const isSystemDark = window?.matchMedia
  ? window.matchMedia('(prefers-color-scheme: dark)')?.matches
  : undefined;

export function saveTheme(theme: ThemeType) {
  window.localStorage && localStorage.setItem('selectedTheme', theme);
}

/* istanbul ignore next line */
export function getThemeFromStorage(): ThemeType | null {
  return window.localStorage
    ? (localStorage.getItem('selectedTheme') as ThemeType) || null
    : null;
}
