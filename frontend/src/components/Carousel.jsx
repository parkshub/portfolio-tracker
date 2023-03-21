import React from 'react'
import { Grid, Button, Typography, Box, Paper, Container} from '@mui/material'
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Carousel = ({coins}) => {

  const responsive = {
    0: { items: 1 },
    568: { items: 4 },
    // 1024: { items:  },
};

const items = coins.map((coin) => {
  return (
  <Grid container justify="column">
    <Grid item xs={12} textAlign="center">
      <img src={coin.image} height="150px"/>
    </Grid>
    <Grid item xs={12} textAlign="center">
      <p>{coin.name}</p>
      <p>{coin.price_change_percentage_24h}% {String(coin.price_change_percentage_24h).startsWith('-') ? <TrendingDownIcon color='secondary'/> : <TrendingUpIcon color='primary'/>}</p>
      <p>${coin.current_price}</p>
    </Grid>
  </Grid>
  )
})


  return (
    <AliceCarousel
        // mouseTracking
        infinite
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        animationDuration={3000}
        autoPlay
        disableDotsControls
        disableButtonsControls
    />
  )
}

export default React.memo(Carousel)