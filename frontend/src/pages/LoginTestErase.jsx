import React from 'react'

import BuySell from '../components/BuySell'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useDispatch } from 'react-redux';
import { testCoin } from '../features/coin/coinSlice';

import { Button } from '@mui/material';
import { useState } from 'react';

const LoginTestErase = () => {

  const dispatch = useDispatch()

  const [date, setDate] = useState('')

  const test = (e) => {

    const userDate = String(e.$d)
    const splitDate = userDate.split(" ").slice(0, 5)
    splitDate.push("UTC")
    
    const dateString = splitDate.join(' ')

    let UTCDate = new Date(dateString).getTime()
    console.log(UTCDate)
    setDate(UTCDate)

    dispatch(testCoin({id: 'bitcoin', date: UTCDate}))
  }

  const testClick = () => {
    dispatch(testCoin({id: 'bitcoin', date}))
  }

  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker onChange={test}/>
    </LocalizationProvider>
    <BuySell transaction={"Sell"} yearlyData={"something"}></BuySell>
    <Button onClick={testClick}>Test</Button>

    </>
  )
}


export default LoginTestErase