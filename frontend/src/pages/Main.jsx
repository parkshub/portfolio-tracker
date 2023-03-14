import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { lineData, pieData } from '../utils/data'
import { useEffect, useState } from 'react';
import { getTopCoins, reset } from '../features/coins/coinSlice';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ExmaplePie from '../components/ExamplePie'
import ExampleLine from '../components/ExampleLine'
import Divider from '@mui/material/Divider';
import { Grid, Button, Typography, Box, Paper, Container} from '@mui/material'

import Carousel from '../components/Carousel';

const Main = () => {
    const dispatch = useDispatch()
    
    const { coins, isPending } = useSelector((state) => state.coin)
    const [value, setValue] = useState('daily');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        dispatch(getTopCoins())

        return () => {
            dispatch(reset())
        }
    }, [dispatch])



    if (isPending) {
        return ( 
            <div>LOADING</div>
        )
    }

  return (
    <>
    <Container maxWidth="xl">
        <Grid container textAlign='center' sx={{width: "100%"}}>
            <Grid item xs={12}>
                {/* <Typography variant='h1' sx={{ typography: { xs: "h3", md: "h1"}}}>   just know you can do this */}

                <Typography variant='h1'>
                    Welcome
                </Typography>


                <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum rerum, officia expedita voluptate laboriosam nulla aliquam sunt. Nam quia eos reprehenderit itaque ab iure impedit quos vel nesciunt, officia commodi laudantium delectus? Deserunt sit voluptas, optio ipsum laboriosam odio placeat.
                </Typography>
                <Grid item>
                    <Button variant='contained' sx={{m: 1, width: 100}}>
                        Sign Up
                    </Button>
                    
                    <Button variant='contained' sx={{m: 1, width: 100}}>
                        Login
                    </Button>
                </Grid>
            </Grid>

            {/* <Grid item container xs={12} sx={{border: 10, borderColor:"black"}}> */}
            <Grid item container xs={12}>
                <Grid item xs={12} sm={6} height={400}>
                    <ExmaplePie data={pieData}/> 
                </Grid>
                <Grid item container xs={12} sm={6} height={400} direction="row">
                    
                    <Grid item container height={350} xs={12}>
                        <ExampleLine data={lineData} />
                    </Grid>

                    <Grid item xs={12}>
                        <Box sx={{ width: '100%' }} display="flex" justifyContent="center">
                                <Tabs
                                    value={value}
                                    onChange={ handleChange }
                                    textColor="primary"
                                    indicatorColor="primary"
                                    aria-label="secondary tabs example"
                                >
                                    <Tab value="daily" label="daily" sx={{ fontSize: 10 }}/>
                                    <Tab value="monthly" label="monthly" sx={{ fontSize: 10 }}/>
                                    <Tab value="yearly" label="yearly" sx={{ fontSize: 10 }}/>
                                </Tabs>
                        </Box>                    
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                
            </Grid>
            <Grid item xs={12}>
                <Divider sx={{m: 5}} variant="middle">Top 10 Coins by Market Capital</Divider>
                <Box display="flex" justifyContent="center">
                    <Carousel coins={coins}/>
                </Box>
            </Grid>
        </Grid>


        {/* https://github.com/Learus/react-material-ui-carousel/blob/master/README.md */}
    </Container>
    </>
  )
}

export default Main