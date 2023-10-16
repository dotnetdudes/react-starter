/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */
import { translations } from 'locales/translations';
import { _t } from 'app/utils/messages';

export const messages = {
  error: () => _t(translations.ExampleFeature.error, 'Error'),
};
