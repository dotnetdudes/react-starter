/**
 *
 * Header
 *
 */
import Toolbar from '@mui/material/Toolbar';
import { useTranslation } from 'react-i18next';
import AppBar from '@mui/material/AppBar';

export const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <AppBar
      position="sticky"
      sx={{
        height: '42px',
        // backgroundColor: '#fff',
        borderBottom: '1px solid #ededee',
        paddingRight: '1.3rem',
      }}
      elevation={0}
    >
      <Toolbar disableGutters={true} variant="dense">
        header toolbar
      </Toolbar>
    </AppBar>
  );
};
