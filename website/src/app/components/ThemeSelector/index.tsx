import { messages } from './messages';
import * as React from 'react';
import { themeActions } from 'app/components/ThemeProvider/slice';
import { useDispatch, useSelector } from 'react-redux';
import { saveTheme } from 'app/components/ThemeProvider/utils';
import { ThemeType } from 'app/components/ThemeProvider/slice/types';
import { selectThemeKey } from 'app/components/ThemeProvider/slice/selectors';
import { useTranslation } from 'react-i18next';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Radio } from '@mui/material';

export function ThemeSelector() {
  const { t } = useTranslation();
  const theme = useSelector(selectThemeKey);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value as ThemeType;
    saveTheme(value);
    dispatch(themeActions.changeTheme(value));
  };

  return (
    <>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">
          {t(...messages.selectTheme())}
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={theme}
          onChange={handleChange}
        >
          <FormControlLabel value="light" control={<Radio />} label="Default" />
          <FormControlLabel value="dark" control={<Radio />} label="Dark" />
          <FormControlLabel value="green" control={<Radio />} label="Green" />
          <FormControlLabel
            value="blue"
            control={<Radio />}
            label="Deep Purple"
          />
          <FormControlLabel value="red" control={<Radio />} label="Red" />
        </RadioGroup>
      </FormControl>
    </>
  );
}
