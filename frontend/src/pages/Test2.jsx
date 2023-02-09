import * as React from 'react';

import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid'
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ThemeProvider } from '@mui/private-theming';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function ResponsiveAppBar() {
  

  return (
   
      <Grid container justify="column">
        <Grid item xs={12} sm={6}>
          <Button size="large" variant='contained' color='primary'>Hello</Button>
        </Grid>
        <Grid item xs={12} sm={6}>
        <ThemeProvider theme={theme}>
          <Typography variant='h1' color="orange">asdfadsf</Typography>
          <Typography variant='myVariant' color="orange">asdfadsf</Typography>
        </ThemeProvider>
        </Grid>
      </Grid>
    
  );
}
export default ResponsiveAppBar;
