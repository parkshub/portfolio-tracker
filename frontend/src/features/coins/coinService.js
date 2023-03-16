import axios from 'axios'

const getTopCoins = async() => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    console.log(res.data.slice(0,10))
    return res.data.slice(0,10)
}

const coinService = {
    getTopCoins,
}

export default coinService