import React from 'react'
import { useState } from 'react';
import { Grid, Button, Typography, Box, Paper, Container} from '@mui/material'
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function CarouselItem({coin}) {

    const [sign, changeSign] = useState(String(coin.price_change_percentage_24h).startsWith('-') ? true : false)

  return (
    <Grid container>
        <Grid item xs={12} textAlign="center">
            <img src={coin.image} height="150px"/>
        </Grid>
        <Grid item xs={12} textAlign="center">
            <p>{coin.name}</p>
            <p>{coin.price_change_percentage_24h}% {sign ? <TrendingDownIcon color='secondary'/> : <TrendingUpIcon color='primary'/>}</p>
            <p>${coin.current_price}</p>
        </Grid>
    </Grid>
  )
}
