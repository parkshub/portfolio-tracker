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

import { getCoin } from '../features/coin/coinSlice';
import { lineData } from '../utils/data';
import { tableCellClasses } from "@mui/material/TableCell";

const Profile = () => {


    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    
    const { coins, isPending, isRejected, message } = useSelector((state) => state.coin)

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
        
    const [value, setValue] = useState('daily');
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

    const lineDataFunc = async() => {
        const uniqueCoinsUser = [...new Set(coins.map(coin => coin.coinId))]
        const cache = {}

        Object.entries(localStorage).forEach((x) => {
            if (uniqueCoinsUser.includes(x[0])) { 
                cache[x[0]]=JSON.parse(x[1]) 
            }
        })

        const missing = []
        const today = new Date().getTime()

        uniqueCoinsUser.forEach((x) => {

            if(!Object.keys(cache).includes(x) || today - cache[x]['time'] > 86400000) {
                missing.push(x)
            }
        })
        // console.log('these are missing', missing)

        if (missing.length > 0) {
            for (let i of missing) {
                await dispatch(getCoin(i))
                // console.log('these are missing', i)
                // console.log(localStorage.getItem(i))
                cache[i] = JSON.parse(localStorage.getItem(i))
            }
        }

        // getting new values for missing coins need to happen here
        

        

        const lineData = generateLineData(cache, uniqueCoinsUser, coins)
        setLineGraph(lineData)
    }

    useEffect(() => {
        dispatch(getTx())
    },[dispatch])

    useEffect(() => {
        // console.log('useeffect ran and coins values is ', coins.length)
        setFilteredCoinState(coins)
        
        lineDataFunc()

    }, [coins]) 

    return (

        <Container maxWidth="xl">
            <Grid container sx={{marginBottom: 4, marginTop: 4}} justifyContent='center'>
                <Table
                    sx={{
                        [`& .${tableCellClasses.root}`]: {
                            borderBottom: "none"
                        },
                        width: 500
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ verticalAlign: 'top'}}>
                                Profit
                            </TableCell>
                            <TableCell style={{ verticalAlign: 'top' }}>
                                %Profit
                            </TableCell>
                            <TableCell style={{ verticalAlign: 'top' }}>
                                Allocation
                            </TableCell>
                            <TableCell style={{ verticalAlign: 'top' }}>
                                Current Value
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {lineGraph && lineGraph.overview.profit !== undefined && 
                            <>
                            <TableCell style={{ verticalAlign: 'bottom' }}>
                                <Typography variant='p' color={lineGraph.overview.profit < 0 ? 'secondary' : 'primary'}>
                                    {lineGraph.overview.profit < 0 ? '-' : '+'}${lineGraph.overview.profit.toLocaleString()} 
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant='p' color={lineGraph.overview.profit < 0 ? 'secondary' : 'primary'}>
                                    {lineGraph.overview.profit < 0 ? '-' : '+'}{lineGraph.overview.profitPercent}
                                </Typography>                        
                            </TableCell>
                            <TableCell>
                                <Typography variant='p' color={lineGraph.overview.profit < 0 ? 'secondary' : 'primary'}>
                                    ${lineGraph.overview.allocated.toLocaleString()}
                                </Typography>                        
                            </TableCell>
                            <TableCell> 
                                <Typography variant='p' color={lineGraph.overview.profit < 0 ? 'secondary' : 'primary'}>
                                    ${lineGraph.overview.currentValue.toLocaleString()}
                                </Typography>
                            </TableCell>
                            </>
                            }
                        </TableRow>
                    </TableBody>
                </Table>
            </Grid>

            <Grid container sx={{marginBottom: 10}}>

                { pieData !== '' &&
                <Grid item container height={350} xs={12} sm={6}>
                    <ExamplePie data={pieData}></ExamplePie>
                </Grid>
                }

                { lineGraph !== '' &&
                <>
                <Grid item container height={350} xs={12} sm={6}>
                    <ExampleLine data={lineGraph[value]} />
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
                </>
                }
            </Grid>
            
            <TextField label='Search' variant='standard' onChange={handleSearchChange}></TextField>

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
        </Container>
    )
}

export default Profile

