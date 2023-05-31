/**
 *
 * LanguageSelect
 *
 */
import { messages } from './messages';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface Props {}

export function LanguageSelect(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (event: SelectChangeEvent) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <FormControl>
      <InputLabel id="language-select-label">
        {t(...messages.title())}
      </InputLabel>
      <Select
        labelId="language-select-label"
        id="language-select"
        value={i18n.language || 'en'}
        label={t(...messages.title())}
        onChange={handleLanguageChange}
      >
        <MenuItem value="en">{t(...messages.english())}</MenuItem>
        <MenuItem value="de">{t(...messages.german())}</MenuItem>
        <MenuItem value="es">{t(...messages.spanish())}</MenuItem>
        <MenuItem value="fr">{t(...messages.french())}</MenuItem>
        <MenuItem value="it">{t(...messages.italian())}</MenuItem>
        <MenuItem value="ja">{t(...messages.japanese())}</MenuItem>
        <MenuItem value="ko">{t(...messages.korean())}</MenuItem>
        <MenuItem value="nl">{t(...messages.dutch())}</MenuItem>
        <MenuItem value="pt">{t(...messages.portuguese())}</MenuItem>
        <MenuItem value="th">{t(...messages.thai())}</MenuItem>
        <MenuItem value="zh">{t(...messages.chinese())}</MenuItem>
      </Select>
    </FormControl>
  );
}
