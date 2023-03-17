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


export default function Browse() {

    const dispatch = useDispatch()

    // const { coins, isPending } = useSelector((state) => state.coin)

    const [coinsState, setCoinsState] = useState("")
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)

    const getAllCoins = async function() {
        const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false')
        setCoinsState(res.data)
    } // make sure to do all requests and stuff in the backend using cors

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    useEffect(() => {
        // dispatch(getAllCoins())
        // setCoinsState(coins)
        getAllCoins()

        return () => {
            // dispatch(reset())
        }
    }, [])

    return (
        <Box>
        <TextField></TextField>
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
                    { coinsState.length > 0 &&
                        coinsState.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(coin => {
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
                        count={coinsState.length}
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