import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
// import Container from '@mui/material/Container';

import { Grid, Typography, Container, Link } from '@mui/material';


const Footer = () => {
  return (
    <Container maxWidth="xl" sx={{marginTop: 5}}>
        <Link href='https://github.com/parkshub' underline='none' color='black'>
            <Grid container justifyContent={'center'}>
                Copyright &nbsp; <CopyrightIcon/> &nbsp; 2023 | parkshub
            </Grid>
        </Link>
    </Container>
  )
}

export default Footer