import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useParams } from 'react-router-dom'

import { getCoin } from '../features/coins/coinSlice'


import ExampleLine from '../components/ExampleLine'

import { lineData, pieData } from '../utils/data'

import { Grid, Button, Typography, Box, Paper, Container} from '@mui/material'

const Coins = () => {

    const dispatch = useDispatch()
    const { coin, isPending } = useSelector((state) => state.coin)

    const { id } = useParams()

    useEffect(() => {
        dispatch(getCoin(id))
    },[dispatch, id])


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
                    <Grid item height={400} xs={12} md={6}>
                        <ExampleLine data={coin.yearlyChart} />
                    </Grid>
                </Grid>
            }
        </Grid>
        </Container>
            
    )
}

export default Coins