import axios from 'axios'

// https://api.coingecko.com/api/v3/coins/bitcoin
// for individual coins


// https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=max
// for chart data

    // const daily = await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1")
    // const monthly = await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=90")
    // const yearly = await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365")
    // const max = await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=max")

const API_URL = '/api/coin/'

const getCoin = async(id) => {
  const response = await axios.get(API_URL + 'getCoin')
  return response.data
    

    // const info = (await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)).data

    // let daily = (await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`)).data.prices
    // daily = daily.reverse().filter((x, i) => i % 12 === 0).reverse()
    // const dailyChart = 
    // [{
    //     "id": "daily",
    //     "color": "hsl(155, 70%, 50%)",
    //     "data": []
    // }]
    // daily.forEach(x => dailyChart[0].data.push({"x": new Date(x[0]).toUTCString().split(' ').slice(4,6).join(' '), "y": Number(x[1].toFixed(2))}))    

    
    // let monthly = (await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=91`)).data.prices
    // monthly = monthly.reverse().filter((x, i) => i % 4 === 0).reverse()
    // const monthlyChart = 
    // [{
    //     "id": "monthly",
    //     "color": "hsl(155, 70%, 50%)",
    //     "data": []
    // }]
    // monthly.forEach(x => monthlyChart[0].data.push({"x": new Date(x[0]).toUTCString().split(' ').slice(1,4).join(' '), "y": Number(x[1].toFixed(2))}))    


    // let yearly = (await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365`)).data.prices
    // yearly = yearly.reverse().filter((x, i) => i % 16 === 0).reverse()
    // const yearlyChart = 
    // [{
    //     "id": "yearly",
    //     "color": "hsl(155, 70%, 50%)",
    //     "data": []
    // }]
    // yearly.forEach(x => yearlyChart[0].data.push({"x": new Date(x[0]).toUTCString().split(' ').slice(1,4).join(' '), "y": Number(x[1].toFixed(2))}))  

    // const res = {info, dailyChart, monthlyChart, yearlyChart}
    // console.log(res)

    // return res
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

const coinService = {
    getCoin,
    getTopCoins,
    getAllCoins
}

export default coinService