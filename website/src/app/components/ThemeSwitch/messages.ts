import { translations } from 'locales/translations';
import { _t } from 'app/utils/messages';

export const messages = {
  selectDark: () =>
    _t(
      translations.Theme.selectDark,
      'Select dark mode', // default value
    ),
  selectLight: () =>
    _t(
      translations.Theme.selectLight,
      'Select light mode', // default value
    ),
};
