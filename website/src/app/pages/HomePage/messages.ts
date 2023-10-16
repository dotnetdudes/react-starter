import { translations } from 'locales/translations';
import { _t } from 'app/utils/messages';

export const messages = {
  title: () =>
    _t(
      translations.HomePage.title,
      'Home page title', // default value
    ),
};
