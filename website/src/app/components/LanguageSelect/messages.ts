/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */
import { translations } from 'locales/translations';
import { _t } from 'app/utils/messages';

export const messages = {
  title: () => _t(translations.age, 'Language'),
  english: () => _t(translations.english, 'English'),
  german: () => _t(translations.german, 'German - Deutsch'),
  french: () => _t(translations.french, 'French - français'),
  italian: () => _t(translations.italian, 'Italian - italiano'),
  spanish: () => _t(translations.spanish, 'Spanish - español'),
  japanese: () => _t(translations.japanese, 'Japanese - 日本語'),
  korean: () => _t(translations.korean, 'Korean - 한국어'),
  dutch: () => _t(translations.dutch, 'Dutch - Nederlands'),
  portuguese: () => _t(translations.portuguese, 'Portuguese - português'),
  thai: () => _t(translations.thai, 'Thai - ไทย'),
  chinese: () => _t(translations.chinese, 'Chinese - 中文'),
};
