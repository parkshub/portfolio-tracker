import React, { useEffect } from 'react'

import ExamplePie from '../components/ExamplePie'
import ExampleLine from '../components/ExampleLine'

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useDispatch, useSelector } from 'react-redux';

import { TextField } from '@mui/material';

import { getTx } from '../features/coin/coinSlice';
import Typography from '@mui/material/Typography';
import TxCell from '../components/TxCell'
import { Button } from '@mui/material'
import { useState } from 'react';

import { generatePieData } from '../utils/generatePieData';
import { generateLineData } from '../utils/generateLineData';
import { convertDate } from '../utils/convertDate';

import { Grid, Paper, Container} from '@mui/material'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


///////////////////////////////
// I THINK I KNOW THE SOLUTION 04.11.23
//////////////////////////////
// MAKE THE FUNCTION RETURN '' OR [] OR {} OR WHATEVER IT USUALLY RETURNS BUT EMPTY
// AND MAKE THE GRAPH PART IN REACT ONLY RENDER USING A CONDITIONAL LIKE VAR!=='' && RENDER


// MAIN ISSUE RIGHT NOW IS THAT GENERATELINEDATA IS BEING RUN WHEN ALL THE DATA ISN'T COMPLETELY LOADED RESULTING IN ERRORS DURING THE FUNCTION CALL, PUT THE PART THAT NEEDS TO BE RUN HERE IN USEFFECT, BUT STILL NOT WORKING MIGHT NEED TO CREATE AN ASYNC THUNK FOR IT

//!!! I HAVE AN IDEA...MAYBE USE EXAMPLE LINE DATA AS PLACEHOLDER
//!!! OR! DONT SHOW LINE GRAPH UNTIL LINEGRAPH STATE IS NOT EQUAL TO ''

const Profile = () => {

    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    
    const { coins, isPending, isRejected, message } = useSelector((state) => state.coin)

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
        
    const [value, setValue] = useState('daily');
    // const [chartData, setChartData] = useState(lineGraph.value)

    const [filteredCoinState, setFilteredCoinState] = useState(coins)
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [lineGraph, setLineGraph] = useState('')

    const pieData = generatePieData(coins)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSearchChange = (event) => {
        const filteredCoins = coins.filter(x => x.coinId.includes(event.target.value) || x.coinSymbol.includes(event.target.value))
        setFilteredCoinState(filteredCoins)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    useEffect(() => {
        dispatch(getTx())
    },[dispatch])

    useEffect(() => {
        console.log('useeffect ran and coins values is ', coins)
        setFilteredCoinState(coins)

        ////////////////////////////////
        ////////////////////////////////
        // const uniqueCoinsUser = [...new Set(coins.map(coin => coin.coinId))]
        // const cache = {}

        // Object.entries(localStorage).forEach((x) => {
        //     if (uniqueCoinsUser.includes(x[0])) { 
        //         cache[x[0]]=JSON.parse(x[1]) 
        //     }
        // })

        // const missing = []
        // const today = new Date().getTime

        // uniqueCoinsUser.forEach((x) => {

        //     if(!Object.keys(cache).includes(x) || today - cache[x]['time'] > 86400000) {
        //         missing.push(x)
        //     }
        // })

        
        // console.log('this is it ',cache, missing, uniqueCoinsUser, coins)
        
        // // const {yearlyLineData, monthlyLineData, dailyLineData} = generateLineData(cache, missing, uniqueCoinsUser, coins)
        // // setLineGraph({'yearly': yearlyLineData, 'monthly': monthlyLineData, 'daily': dailyLineData})

        
        ////////////////////////////////
        ////////////////////////////////
        // console.log(coins)

    }, [coins]) // by doing this you are saying when coins changes, call this

    return (
        // there should also be graphs and data here
        <Box>
            {/* <TextField onChange={handleChangetest}></TextField> */}
            <Grid item container height={350} xs={12}>
                <ExamplePie data={pieData}></ExamplePie>
            </Grid>

            {/* <Grid item container height={350} xs={12}>
                <ExampleLine data={lineGraph[value]} />
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
            </Grid> */}


            <TextField onChange={handleSearchChange}></TextField>
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
                        { filteredCoinState.length > 0 &&
                            filteredCoinState.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((coin) => {
                                return (
                                    <TxCell key={coin._id} coin={coin}/>
                                )
                            })
                        }                        
                        <TablePagination
                            showFirstButton={true}
                            showLastButton={true}
                            rowsPerPageOptions={[5, 10, 25]}
                            // component="div"
                            count={filteredCoinState.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />  
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default Profile

