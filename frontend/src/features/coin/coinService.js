import { responsiveFontSizes } from '@mui/material'
import axios from 'axios'

import { convertDate } from '../../utils/convertDate'

// https://api.coingecko.com/api/v3/coins/bitcoin
// for individual coins


// https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=max
// for chart data

    // const daily = await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1")
    // const monthly = await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=90")
    // const yearly = await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365")
    // const max = await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=max")

const API_URL = '/api/coin/'

// const testCoin = async(data) => {

//     console.log("getCoin service received id ", data.id, "and date ", data.date)
//     const response = (await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365`)).data.prices
//     return response.data
// }


const getCoin = async(id) => {

    console.log("getCoin service received id ", id)

    const time = convertDate()

    const storageCoin = localStorage.getItem(id) !== null ? JSON.parse(localStorage.getItem(id)) : ''

    const getAll = storageCoin === '' || storageCoin.time < time ? true : false

    // uncomment this
    const response = await axios.get(API_URL + `getCoin/${id}/${getAll}`)

    if (getAll) {
        // input time into it
        console.log('coin service is telling controller to get all and received', response.data)

        // uncomment below not the second one, keep that commented
        const data = {"time": time, "coin": JSON.parse(JSON.stringify(response.data))} // parsing is not need but just in case, after everything is done try below
        // const data = {"time": time, "coin": response.data}

        localStorage.setItem(id, JSON.stringify(data))
        return response.data

    } else {
        console.log('coin service just using localstorage')

        const data = JSON.parse(localStorage.getItem(id))
        // info, dailyChart, monthlyChart, yearlyChart, yearlyRaw

        // // uncomment two below
        // data.coin.info = response.data.info
        // data.coin.dailyChart = response.data.dailyChart

        // localStorage.setItem(id, JSON.stringify(data))

        return data.coin
    }
}

const getTopCoins = async() => {

    console.log('gettopcoins service')

    const time = convertDate()

    const storageCoin = localStorage.getItem('topCoins') !== null ? JSON.parse(localStorage.getItem('topCoins')) : ''

    const getTopCoins = storageCoin === '' || storageCoin.time < time ? true : false
    console.log("this is truth", getTopCoins)

    const response = await axios.get(API_URL + `getTopCoins/${getTopCoins}`)

    console.log('service received response:', response)

    if (getTopCoins) {
        console.log('service got all coins')
        const data = {"time": time, "coins": JSON.parse(JSON.stringify(response.data))}
        localStorage.setItem('topCoins', JSON.stringify(data))
        return data.coins
    } else {
        console.log("service didn't need all coins")
        const data = JSON.parse(localStorage.getItem('topCoins'))
        return data.coins
    }
    // return response.data
}

const getAllCoins = async() => {

    const time = convertDate()

    const storageCoin = localStorage.getItem('allCoins') !== null ? JSON.parse(localStorage.getItem('allCoins')) : ''

    const getAllCoins = storageCoin === '' || storageCoin.time < time ? true : false
    console.log("this is truth", getAllCoins)

    

    const response = await axios.get(API_URL + `getAllCoins/${getAllCoins}`)

    if (getAllCoins) {
        console.log('service got all coins')
        const data = {"time": time, "coins": JSON.parse(JSON.stringify(response.data))}
        localStorage.setItem('allCoins', JSON.stringify(data))
        return data.coins
    } else {
        console.log("service didn't need all coins")
        const data = JSON.parse(localStorage.getItem('allCoins'))
        return data.coins
    }
    // return response.data
}

const txCoin = async(data, token) => {
    console.log('tx service received ', data)
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL + 'txCoin', data, config)
    return response.data
}

const getTx = async(token) => {
    console.log("gettx service ran")
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL + 'getTx', config)
    return response.data
}

const deleteTx = async(id, token) => {
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + `deleteTx/${id}`, config)
    return response.data
}

const coinService = {
    getCoin,
    getTopCoins,
    getAllCoins,
    // testCoin,
    txCoin,
    getTx,
    deleteTx
}

export default coinService