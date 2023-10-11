import { translations } from 'locales/translations';
import { _t } from 'app/utils/messages';

export const messages = {
  title: () =>
    _t(
      translations.NotFoundPage.title,
      'Page not found', // default value
    ),
};
