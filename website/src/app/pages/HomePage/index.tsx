import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Grid from '@mui/material/Grid';
import { ExampleFeature } from 'app/features/ExampleFeature/Loadable';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="dotnetdudes-react-starter"
          content="dotnetdudes-react-starter"
        />
      </Helmet>
      <Grid container direction={'row'} spacing={0}>
        <Grid item xs={12}>
          home page
        </Grid>
        <Grid item xs={12}>
          <ExampleFeature />
        </Grid>
      </Grid>
    </>
  );
}
