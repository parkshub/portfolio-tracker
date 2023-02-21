import * as React from 'react';
import { Button, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles';
// import Box from "@material-ui/core/Box";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

// if you want to use theme.spacing...blah or theme. whatever you need ({theme}) otherwise you can just do styled(Button) ({})

const MyButton = styled(Button)(({theme}) => ({ // * IMPORTANT THIS HAS TO BE CAPITALIZED
  // padding: theme.spacing(1),
  // color: "darkslategray"
}));

function ResponsiveAppBar() {

  return (
   
    <Grid container justify="column">
      <Grid item xs={12} sm={6} sx={{ border: 2, borderColor: "primary.main" }} display="flex" justifyContent="center" alignItems="center">
        {/* <Box display="flex" justifyContent="center" alignItems="center" sx={{height: "fill"}}> */}
          <Button size="large" variant='contained' color='primary' startIcon={<AccessAlarmIcon/>}>Hello</Button>
        {/* </Box> */}
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant='h3' color="orange">asdfadsf</Typography>
        <Typography sx={{m:10, border:10}} variant='myVariant' color="orange">asdfadsf</Typography>
        <Typography variant='h1' component='p'>it uses h1 styles but it's a p tag</Typography>
      </Grid>
      <MyButton variant="contained" sx={{
        backgroundColor: "green", 
        "&:hover": {
          backgroundColor: "lightgreen"
          },
        "&:disabled": { // this is for when the button is disabled
          backgroundColor: "grey"
        }
        }}>custom button</MyButton>
    </Grid>
    
  );
}
export default ResponsiveAppBar;
