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

import { reset } from '../features/coin/coinSlice'

import BuySell from '../components/BuySell'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import { getTx } from '../features/coin/coinSlice';

import TxCell from '../components/TxCell'

const Coins = () => {

    const dispatch = useDispatch()
    const { id } = useParams()

    const { coin, coins, isPending } = useSelector((state) => state.coin)

    
    // const filteredCoins = coins.filter((x) => x.coinId == id)
    // console.log(filteredCoins)

    const [filteredCoins, setFilteredCoins] = useState(coins.filter((x) => x.coinId == id))

    const [value, setValue] = useState('daily');
    // uncomment this later
    // const [chartData, setChartData] = useState(coin.dailyChart) 

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        dispatch(getCoin(id))
        dispatch(getTx())

        return () => {
            dispatch(reset())
        }
    },[dispatch, id])

    useEffect(() => {
        setFilteredCoins(coins.filter((x) => x.coinId == id))
    }, [coins]) // by doing this you are saying when coins changes, call this


    // uncomment this later
    // useEffect(() => {
    //     setChartData(coin[value + 'Chart'])
    // },[coin, value])

    return (
        <Container maxWidth="xl">
            {/* get rid of these two below */}
            <BuySell transaction={"buy"} yearlyData={coin.yearlyRaw} coinInfo={coin.info}></BuySell>
            <BuySell transaction={"sell"} yearlyData={coin.yearlyRaw} coinInfo={coin.info}></BuySell>
            {/* <Grid container>
                { coin !== '' &&
                    <Grid item container xs={12}>
                        <Grid item xs={12} md={6} textAlign="center" height={400}>
                            <div>Name: {coin.info.name}</div>
                            <div>Symbol: {coin.info.symbol.toUpperCase()}</div>
                            <img src={coin.info.image.large} alt="" />
                            <div>Price: ${coin.info.market_data.current_price.usd}</div>
                            <div>Percent Price Change 24hr: {coin.info.market_data.price_change_percentage_24h}%</div>
                            <div>Market Cap Rank: {coin.info.market_cap_rank}</div>
                            <BuySell transaction={"buy"} yearlyData={coin.yearlyRaw} coinInfo={coin.info}></BuySell>
                            <BuySell transaction={"sell"} yearlyData={coin.yearlyRaw} coinInfo={coin.info}></BuySell>
                        </Grid>
                        <Grid item container xs={12} sm={6} height={400} direction="row">
                        
                        <Grid item container height={350} xs={12}>
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
            </Grid> */}
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Date
                            </TableCell>
                            <TableCell>
                                Logo
                            </TableCell>
                            <TableCell>
                                Name: Ticker
                            </TableCell>
                            <TableCell>
                                Tx Type
                            </TableCell>
                            <TableCell>
                                Price
                            </TableCell>
                            <TableCell>
                                Amount
                            </TableCell>
                            <TableCell>
                                Total
                            </TableCell>
                            <TableCell>
                                
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { filteredCoins.length > 0 &&
                            filteredCoins.map((coin) => {
                                return (
                                    <TxCell coin={coin}/>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
            
    )
}

export default Coins