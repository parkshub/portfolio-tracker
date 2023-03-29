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

    // ** do something like below to set data and get data
    // const response = {"coin": JSON.parse(JSON.stringify(response.data))}
    // response.time = convertDate()
    
    // localStorage.setItem('COINNAME SHOULD BE ID', JSON.stringify(response))

    // return response.coin

    // ** and if we're only getting daily

    // const storage = JSON.parse(localStorage.getItem('COINNAME'))
    // const coin = storage.coin
    // coin.daily = response.data.dailyDataORSOMETHING !! we have to specify this since we're also going to be getting info !!

    // localStorage.setItem('COINNAME', coin)

    // ** when there is nothing in storage it's null
    // ** when appending to original storage {...prev, ...new} works

    // pseudo code
    // check if there is entry in localstorage with that coins name aka id
    // if yes
        // compare time there and time now
            // if different
                // set param of truth to true (probably dont need and if else here)
            // else
                // set params of truth to false
    // if localstorage is null
        // set truth params to true
        // get all data and do normally and set localstorage like above
    
    // i can probably make this simpler by saying...if time before or null
        // get all and do normally
    // else
        // get localstorage .coin, update only daily values and info
        // set localstorage
        // send the whole data (including info, monthly, yearly) with new values for daily
    const response = await axios.get(API_URL + `getCoin/${id}`)
    return response.data
}

const getTopCoins = async() => {

    const response = await axios.get(API_URL + 'getTopCoins')
    return response.data
}

const getAllCoins = async() => {

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