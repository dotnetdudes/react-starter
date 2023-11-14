/**
 *
 * Loader
 *
 */
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export function Loader() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '200px',
      }}
    >
      <CircularProgress />
    </Box>
  );
}
