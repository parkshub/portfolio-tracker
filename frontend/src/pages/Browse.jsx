import React from 'react';

import axios from 'axios';

import { useState } from 'react';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { getAllCoins } from '../features/coin/coinSlice';
import { reset } from '../features/coin/coinSlice';

import { useSelector } from 'react-redux';
import { Grid, Paper, Container} from '@mui/material'


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


export default function Browse() {

    const dispatch = useDispatch()

    const { coins, isPending } = useSelector((state) => state.coin) // store value

    const [filteredCoinState, setFilteredCoinState] = useState(coins) // this does not get called on second render

    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)

    // const [testValue, setTestValue] = useState("")


    const handleSearchChange = (event) => {
        // console.log(event.target.value)
        // setTestValue(event.target.value)
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
        return () => {
            dispatch(reset())
        }
    }, [dispatch]) // doing setCoins and dispatch seems like bad practice here cuz dispatch calling also when coins changes when you dont need to

    useEffect(() => {
        setFilteredCoinState(coins)
    }, [coins]) // by doing this you are saying when coins changes, call this

    return (
        <Container sx={{marginTop: 3}} maxWidth="xl">
            <TextField label='Search' variant='standard' onChange={handleSearchChange}></TextField>
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
                                    <BrowseCoinCell key={coin.id} coin={coin}/>
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
        </Container>
    )
}