import { messages } from './messages';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { useTranslation } from 'react-i18next';

export function LanguageSwitch() {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <FormControl>
      <FormLabel id="language-radio-buttons-group-label">
        {t(...messages.selectLanguage())}
      </FormLabel>
      <RadioGroup
        aria-labelledby="language-radio-buttons-group-label"
        defaultValue={i18n.language}
        name="language-buttons-group"
        onChange={handleLanguageChange}
        value={i18n.language}
      >
        <FormControlLabel value="en" control={<Radio />} label="English" />
        <FormControlLabel value="de" control={<Radio />} label="Deutsch" />
      </RadioGroup>
    </FormControl>
  );
}
