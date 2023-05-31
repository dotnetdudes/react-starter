import * as React from 'react';
import Box from '@mui/material/Box';
import { Helmet } from 'react-helmet-async';

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
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
          <div>Page not found.</div>
        </div>
      </Box>
    </>
  );
}
