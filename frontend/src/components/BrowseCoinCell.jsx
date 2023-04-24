import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import { Link } from 'react-router-dom';

import { Typography } from '@mui/material';

const BrowseCoinCell = ({coin}) => {

    const top3List = ['bitcoin', 'ethereum']
    const randomizer = Math.floor(Math.random() * (2) ) + 0;
    const coinLink = top3List[randomizer]
    // this is done to limit the coin pages to just bitcoin and ethereum. 
    // gathering historical data from multiple coins resulted reaching the api call limit
    

    return (
        // <TableRow component={Link} to={`/coins/${coin.id}`}>
        <TableRow component={Link} to={`/coins/${coinLink}`} style={{textDecoration: 'none'}} hover='true'>
        {/* // <TableRow hover='true'> */}
            <TableCell>
                <img src={coin.image} alt="" width="50px"/>
            </TableCell>
            <TableCell>
                <Typography>
                    { coin.id
                        .replace(/-/g, ' ')
                        .split(' ')
                        .map(x => {
                            return (
                                x.charAt(0).toUpperCase() + x.slice(1)
                            )
                        })
                            .join(' ') }: { coin.symbol.toUpperCase() 
                    }
                </Typography>
            </TableCell>
            <TableCell>
                <Typography>
                    ${ coin.market_cap.toLocaleString("en-US") }                              
                </Typography>
            </TableCell>
            <TableCell>
                <Typography>
                    ${ coin.current_price.toLocaleString("en-US") }
                </Typography>
            </TableCell>
            <TableCell>
                <Typography color={String(coin.price_change_percentage_24h).startsWith('-') ? 'secondary' : 'primary'}>
                    { coin.price_change_percentage_24h.toFixed(2) }%
                </Typography>
            </TableCell>
        </TableRow>
        // </Link>
    )
}

export default BrowseCoinCell