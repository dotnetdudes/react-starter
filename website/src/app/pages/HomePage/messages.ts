import { translations } from 'locales/translations';
import { _t } from 'app/utils/messages';

export const messages = {
  homeTitle: () =>
    _t(
      translations.HomePage.homeTitle,
      'SRAM PRODUCT REGISTRATION', // default value
    ),
};
