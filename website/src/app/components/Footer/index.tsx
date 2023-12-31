/**
 *
 * Footer
 *
 */
import { messages } from './messages';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return <footer>{t(...messages.title())}</footer>;
};
