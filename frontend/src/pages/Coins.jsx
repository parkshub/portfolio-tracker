import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useParams } from 'react-router-dom'
import { useState } from 'react'

import { getCoin } from '../features/coin/coinSlice'


import ExampleLine from '../components/ExampleLine'

import { lineData, pieData } from '../utils/data'

import { Grid, Button, Typography, Box, Paper, Container} from '@mui/material'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Coins = () => {

    const dispatch = useDispatch()
    const { coin, isPending } = useSelector((state) => state.coin)

    const { id } = useParams()
    console.log(id)

    const [value, setValue] = useState('daily');
    const [chartData, setChartData] = useState(coin.dailyChart)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        dispatch(getCoin(id))
        return () => {
        }

    },[dispatch, id])

    useEffect(() => {
        setChartData(coin[value + 'Chart'])
        console.log("chartData", chartData)
    },[coin, value])


    // useEffect(() => {
    //     setChartData(coin.dailyChart)
    // },[coin])


    return (
        <Container maxWidth="xl">
        <Grid container>
            { coin !== '' &&
                <Grid item container xs={12}>
                    <Grid item xs={12} md={6} textAlign="center" height={400}>
                        <div>Name: {coin.info.name}</div>
                        <div>Symbol {coin.info.symbol}</div>
                        <img src={coin.info.image.large} alt="" />
                        <div>Price: ${coin.info.market_data.current_price.usd}</div>
                        <div>Percent Price Change 24hr: {coin.info.market_data.price_change_percentage_24h}%</div>
                        <div>Market Cap Rank: {coin.info.market_cap_rank}</div>
                        <Button>Buy</Button>
                        <Button>Sell</Button> 
                    </Grid>
                    <Grid item container xs={12} sm={6} height={400} direction="row">
                    
                    <Grid item container height={350} xs={12}>
                        {/* <ExampleLine data={coin.yearlyChart} /> */}
                        <ExampleLine data={chartData} />
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
            }
        </Grid>
        </Container>
            
    )
}

export default Coins