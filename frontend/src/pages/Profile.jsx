import React, { useEffect } from 'react'

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

const Profile = () => {

    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    
    const { coins, isPending, isRejected, message } = useSelector((state) => state.coin)

    // console.log(coins)

    useEffect(() => {
        dispatch(getTx())
    },[dispatch])

    return (
        // there should also be graphs and data here
        <Box>
            {/* <div>
                {coins.length > 0 &&
                    JSON.stringify(coins)
                }
            
            </div> */}
            {/* <TextField onChange={handleChangetest}></TextField> */}
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
                        { coins.length > 0 &&
                            coins.map((coin) => {
                                return (
                                    <TxCell key={coin._id} coin={coin}/>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default Profile

