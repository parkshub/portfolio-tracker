import React from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material'

import { useDispatch } from 'react-redux';

import { deleteTx } from '../features/coin/coinSlice';
import { Link } from 'react-router-dom';

const TxCell = ({coin}) => {

    const dispatch = useDispatch()

    const onClickDelete = (e) => {
        dispatch(deleteTx(coin._id))
    }

    return (
        <TableRow>
            <TableCell>
                {(new Date(coin.date)).toDateString()}
            </TableCell>
            <TableCell>
                <img src={coin.coinImage} alt="" />
            </TableCell>
            <TableCell>
                <Link to={`/coins/${coin.coinId}`}>
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
                </Link>
            </TableCell>
            <TableCell>
                {coin.type}
            </TableCell>
            <TableCell>
                ${coin.price}
            </TableCell>
            <TableCell>
                {coin.amount}
            </TableCell>
            <TableCell>
                ${coin.total}
            </TableCell>
            <TableCell>
                <Button onClick={onClickDelete}>Delete</Button>
            </TableCell>
        </TableRow>
    )
}

export default TxCell
