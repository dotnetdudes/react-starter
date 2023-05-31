import { messages } from './messages';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { themeActions } from 'app/components/ThemeProvider/slice';
import { useDispatch, useSelector } from 'react-redux';
import { saveTheme } from 'app/components/ThemeProvider/utils';
import { ThemeType } from 'app/components/ThemeProvider/slice/types';
import { selectThemeKey } from 'app/components/ThemeProvider/slice/selectors';
import { useTranslation } from 'react-i18next';

export function ThemeSwitch() {
  const { t } = useTranslation();
  const theme = useSelector(selectThemeKey);
  const dispatch = useDispatch();

  const handleThemeChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const value = event.currentTarget.value as ThemeType;
    saveTheme(value);
    dispatch(themeActions.changeTheme(value));
  };

  return (
    <>
      {theme === 'light' || theme === 'system' ? (
        <IconButton
          aria-label={t(...messages.selectDark())}
          color="inherit"
          size="medium"
          onClick={handleThemeChange}
          value="dark"
        >
          <Brightness4Icon fontSize="large" />
        </IconButton>
      ) : (
        <IconButton
          aria-label={t(...messages.selectLight())}
          color="inherit"
          size="medium"
          onClick={handleThemeChange}
          value="light"
        >
          <Brightness7Icon fontSize="large" />
        </IconButton>
      )}
    </>
  );
}
