import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import { Link } from 'react-router-dom';

const BrowseCoinCell = ({coin}) => {
    return (
        <TableRow component={Link} to={`/coins/${coin.id}`}>
            <TableCell>
                <img src={coin.image} alt="" width="50px"/>
            </TableCell>
            <TableCell>
                { coin.id
                    .replace(/-/g, ' ')
                    .split(' ')
                    .map(x => {
                        return (
                            x.charAt(0).toUpperCase() + x.slice(1)
                        )
                    })
                        .join(' ') }: { coin.symbol.toUpperCase() }
            </TableCell>
            <TableCell>
                ${ coin.market_cap.toLocaleString("en-US") }                              
            </TableCell>
            <TableCell>
                $ {coin.current_price.toLocaleString("en-US") }
            </TableCell>
            <TableCell>
                { coin.price_change_percentage_24h.toFixed(2) }%
            </TableCell>
        </TableRow>
        // </Link>
    )
}

export default BrowseCoinCell