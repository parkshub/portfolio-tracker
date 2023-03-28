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
    const response = await axios.get(API_URL + `getCoin/${id}`)

    if (response.data) {
        
    }

    return response.data
}

const getTopCoins = async() => {
    // const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    // return res.data
    const response = await axios.get(API_URL + 'getTopCoins')
    return response.data
}

const getAllCoins = async() => {
    // const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false')
    // return res.data
    const response = await axios.get(API_URL + 'getAllCoins')
    return response.data
}

const txCoin = async(data, token) => {
    console.log('tx service received ', data)
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL + 'txCoin', data, config) // just a reminder config comes after the data you want to send
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