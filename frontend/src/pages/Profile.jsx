import React, { useEffect } from 'react'

import ExamplePie from '../components/ExamplePie'

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


const Profile = () => {

    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    
    const { coins, isPending, isRejected, message } = useSelector((state) => state.coin)

    
    const [filteredCoinState, setFilteredCoinState] = useState(coins)
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)

    const pieData = generatePieData(coins)
    console.log(pieData)

    console.log(coins)

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
        setFilteredCoinState(coins)
    }, [coins]) // by doing this you are saying when coins changes, call this

    return (
        // there should also be graphs and data here
        <Box>
            {/* <TextField onChange={handleChangetest}></TextField> */}
            <Box height={400}>
                <ExamplePie data={pieData}></ExamplePie>
            </Box>
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

