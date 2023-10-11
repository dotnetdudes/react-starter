import { messages } from './messages';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import ColumnItem from 'app/components/ColumnItem';
import { ExampleFeature } from 'app/features/ExampleFeature/Loadable';
import { ThemeSelector } from 'app/components/ThemeSelector/Loadable';

export function HomePage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t(...messages.title())}</title>
        <meta
          name="dotnetdudes-react-starter"
          content="dotnetdudes-react-starter"
        />
      </Helmet>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <ColumnItem>
            <h1>{t(...messages.title())}</h1>
            <ExampleFeature />
          </ColumnItem>
        </Grid>
        <Grid item xs={12} lg={6}>
          <ColumnItem>
            <ThemeSelector />
          </ColumnItem>
        </Grid>
      </Grid>
    </>
  );
}
