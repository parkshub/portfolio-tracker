import React from 'react';

import axios from 'axios';

import { useState } from 'react';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { getAllCoins } from '../features/coins/coinSlice';
import { reset } from '../features/coins/coinSlice';

import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import BrowseCoinCell from '../components/BrowseCoinCell';
import { TextField } from '@mui/material';

// main issues
// state not showing on table
// state being one step behind


export default function Browse() {

    const dispatch = useDispatch()

    const { coins, isPending } = useSelector((state) => state.coin) // store value

    // const [coinsState, setCoinsState] = useState(coins) // this does not get called on second render
    const [filteredCoinState, setFilteredCoinState] = useState(coins) // this does not get called on second render
    // console.log(coins, coinsState)

    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)

    const [testValue, setTestValue] = useState("")

    // const filteredCoins = coinsState.filter(x => x.id.includes(testValue) || x.symbol.includes(testValue))

    // const getAllCoins = async function() {
    //     const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false')
    //     setCoinsState(res.data)
    // } // make sure to do all requests and stuff in the backend using cors


    const handleChangetest = (event) => {
        // console.log(event.target.value)
        setTestValue(event.target.value)
        console.log('event.target.value', event.target.value)
        console.log('testValue', testValue)

        const filteredCoins = coins.filter(x => x.id.includes(event.target.value) || x.symbol.includes(event.target.value))
        setFilteredCoinState(filteredCoins)
        // setCoinsState(coinsState.filter(x => x.id.includes(testValue)))
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    useEffect(() => {
        dispatch(getAllCoins())
        // setCoinsState(coins)
        // getAllCoins()
        return () => {
            dispatch(reset())
        }
    }, [dispatch]) // doing setCoins and dispatch seems like bad practice here cuz dispatch calling also when coins changes when you dont need to

    useEffect(() => {
        setFilteredCoinState(coins)
    }, [coins]) // by doing this you are saying when coins changes, call this

    return (
        <Box>
        <TextField onChange={handleChangetest}></TextField>
            <TableContainer sx={{ minWidth: 850 }}>
                <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Logo
                        </TableCell>
                        <TableCell>
                            Name: Ticker
                        </TableCell>
                        <TableCell>
                            Market Cap
                        </TableCell>
                        <TableCell>
                            Price
                        </TableCell>
                        <TableCell>
                            Price Change 24 Hours
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { filteredCoinState.length > 0 &&
                        filteredCoinState.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(coin => {
                            return(
                                <BrowseCoinCell coin={coin} key={coin.id}/>
                            )
                        })
                    }
                                    <TablePagination
                        showFirstButton={true}
                        showLastButton={true}
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        // count={coinsState.length}
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