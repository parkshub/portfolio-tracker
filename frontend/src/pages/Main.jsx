import React from 'react'
import { useState } from 'react'

import { Grid, Button, Typography, Box, Paper} from '@mui/material'

const Main = () => {
  return (
    <>
        <Grid container textAlign='center'>
            <Grid item xs={12}>
                {/* <Typography variant='h1' sx={{ typography: { xs: "h3", md: "h1"}}}>   just know you can do this */}

                <Typography variant='h1'>
                    welcome
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum rerum, officia expedita voluptate laboriosam nulla aliquam sunt. Nam quia eos reprehenderit itaque ab iure impedit quos vel nesciunt, officia commodi laudantium delectus? Deserunt sit voluptas, optio ipsum laboriosam odio placeat.
                </Typography>
                <Button variant='contained'>
                    Hello button
                </Button>
                
            </Grid>
        </Grid>
    </>
  )
}

export default Main