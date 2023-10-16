import options from './themes/light';
import darkOptions from './themes/dark';
import redOptions from './themes/red';
import greenOptions from './themes/green';
import blueOptions from './themes/blue';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import { ThemeOptions } from '@mui/material';

const getThemeOptions = (name: string): ThemeOptions => {
  let themeOptions;
  switch (name) {
    case 'light':
      themeOptions = options;
      break;
    case 'dark':
      themeOptions = darkOptions;
      break;
    case 'green':
      themeOptions = greenOptions;
      break;
    case 'red':
      themeOptions = redOptions;
      break;
    case 'blue':
      themeOptions = blueOptions;
      break;
    default:
      themeOptions = options;
  }
  return themeOptions;
};

export const generateTheme = (name: string) => {
  const options = getThemeOptions(name);
  let theme = createTheme(options);
  theme = responsiveFontSizes(theme);
  return theme;
};
