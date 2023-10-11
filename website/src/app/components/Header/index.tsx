/**
 *
 * Header
 *
 */
import { messages } from './messages';
import Toolbar from '@mui/material/Toolbar';
import { useTranslation } from 'react-i18next';
import AppBar from '@mui/material/AppBar';

export const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar variant="dense">{t(...messages.heading())}</Toolbar>
    </AppBar>
  );
};
