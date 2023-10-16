import { messages } from './messages';
import * as React from 'react';
import Box from '@mui/material/Box';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export function NotFoundPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t(...messages.title())}</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '300px',
        }}
      >
        <div>
          <div>
            4
            <span role="img" aria-label="Crying Face">
              😢
            </span>
            4
          </div>
          <div>{t(...messages.title())}</div>
        </div>
      </Box>
    </>
  );
}
