import React from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material'

import { useDispatch } from 'react-redux';

import { deleteTx } from '../features/coin/coinSlice';
import { Link } from 'react-router-dom';
import { border } from '@mui/system';
import {Typography} from '@mui/material';

const TxCell = ({coin}) => {

    const dispatch = useDispatch()

    const onClickDelete = (e) => {
        // e.stopPropogation()
        dispatch(deleteTx(coin._id))
    }

    return (
        <TableRow component={Link} to={`/coins/${coin.coinId}`} style={{textDecoration: 'none'}} hover='true'>
        {/* <TableRow> */}
            <TableCell>
                <Typography>
                    {(new Date(coin.date)).toDateString()}
                </Typography>
            </TableCell>
            <TableCell>
                <img src={coin.coinImage} alt="" />
            </TableCell>
            <TableCell>
                <Typography>
                    { coin.coinId
                        .replace(/-/g, ' ')
                        .split(' ')
                        .map(x => {
                            return (
                                x.charAt(0).toUpperCase() + x.slice(1)
                            )
                        })
                        .join(' ') 
                    } 
                    {': ' + coin.coinSymbol.toUpperCase() }
                </Typography>
            </TableCell>

            <TableCell>
                <Typography>
                    {coin.type}
                </Typography>
            </TableCell>
            <TableCell>
                <Typography>
                    ${coin.price}
                </Typography>
            </TableCell>
            <TableCell>
                <Typography>
                    {coin.amount}
                </Typography>
            </TableCell>
            <TableCell>
                <Typography>
                    ${coin.total}
                </Typography>
            </TableCell>
            <TableCell component={Link}>
                <Button onClick={onClickDelete}>Delete</Button>
            </TableCell>
        </TableRow>
    )
}

export default TxCell
