const CoinModel = require('../models/Coin')
const UserModel = require('../models/User')
const axios = require('axios')

const TestModel = require('../models/Test')

const { convertDate } = require('../utils/convertDate')



exports.testCoin = async(req, res) => {
    console.log('testCion controller')
    console.log(req.body)
    const {id} = req.params
    // console.log(typeof(req.body.date))
    let yearlyRaw = (await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365`)).data.prices
    // console.log(yearlyRaw.forEach(x => console.log(typeof(x[0]))))
    let test = yearlyRaw.filter(x => x.includes(req.body.date))[0][1]
    console.log('this is the price', test)
    res.json("yearlyRaw")
}

exports.test = async(req, res) => {
    const test = await TestModel.findById('641e702e07bc1476ea028ab4').populate('users')
    console.log(test)
    res.json(test)
}


// exports.getCoin = async(req, res) => {

//     console.log('get coin controller ran')

//     const {id} = req.params

//     const info = (await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)).data

//     // let daily = (await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`)).data.prices
//     // daily = daily.reverse().filter((x, i) => i % 12 === 0).reverse()
//     // const dailyChart = 
//     // [{
//     //     "id": "daily",
//     //     "color": "hsl(155, 70%, 50%)",
//     //     "data": []
//     // }]
//     // daily.forEach(x => dailyChart[0].data.push({"x": new Date(x[0]).toUTCString().split(' ').slice(4,6).join(' '), "y": Number(x[1].toFixed(2))}))    

//     // let monthly = (await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=91`)).data.prices
//     // monthly = monthly.reverse().filter((x, i) => i % 4 === 0).reverse()
//     // const monthlyChart = 
//     // [{
//     //     "id": "monthly",
//     //     "color": "hsl(155, 70%, 50%)",
//     //     "data": []
//     // }]
//     // monthly.forEach(x => monthlyChart[0].data.push({"x": new Date(x[0]).toUTCString().split(' ').slice(1,4).join(' '), "y": Number(x[1].toFixed(2))}))    

//     // let yearlyRaw = (await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365`)).data.prices
//     // // console.log(yearly)
//     // let yearly = yearlyRaw.reverse().filter((x, i) => i % 16 === 0).reverse()
//     // const yearlyChart = 
//     // [{
//     //     "id": "yearly",
//     //     "color": "hsl(155, 70%, 50%)",
//     //     "data": []
//     // }]
//     // yearly.forEach(x => yearlyChart[0].data.push({"x": new Date(x[0]).toUTCString().split(' ').slice(1,4).join(' '), "y": Number(x[1].toFixed(2))}))

//     // if (!info || !daily || !monthly || !yearly) {
//     //     res.status(500).send("Could no retrieve data, please refresh.")
//     // }

//     // res.status(201).json({info, dailyChart, monthlyChart, yearlyChart, yearlyRaw})
//     // res.status(201).json({info, yearlyRaw}) // erase this later
//     res.status(201).json({info}) // erase this later
// }


exports.getCoin = async(req, res) => {

    console.log('get coin controller ran')

    const { id, getAll } = req.params

    const truth = getAll === "true"

    if (truth) {

        console.log("get coin controller api ran")


        const info = (await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)).data

        let daily = (await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`)).data.prices
        daily = daily.reverse().filter((x, i) => i % 12 === 0).reverse()
        console.log('this is daily', daily)
        const dailyChart = 
        [{
            "id": "daily",
            "color": "hsl(155, 70%, 50%)",
            "data": []
        }]
        // daily.forEach(x => dailyChart[0].data.push({"x": new Date(x[0]).toUTCString().split(' ').slice(4,6).join(' '), "y": Number(x[1].toFixed(2))}))
        daily.forEach(x => dailyChart[0].data.push({"x": new Date(x[0]).toUTCString().split(' ').slice(4,6).join(' ').split(':').slice(0,2).join(':') + ' GMT', "y": Number(x[1].toFixed(2))}))

        
        

        let monthly = (await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=91`)).data.prices
        monthly = monthly.reverse().filter((x, i) => i % 4 === 0).reverse()
        console.log('this is monthly', monthly)
        const monthlyChart = 
        [{
            "id": "monthly",
            "color": "hsl(155, 70%, 50%)",
            "data": []
        }]
        // monthly.forEach(x => monthlyChart[0].data.push({"x": new Date(x[0]).toUTCString().split(' ').slice(1,4).join(' '), "y": Number(x[1].toFixed(2))}))
        monthly.forEach(x => {
            const temp = new Date(x[0]).toDateString().split(' ')
            const year = "'" + String(temp.slice(3)).split('').slice(2).join('')
            const condensedDate = temp.slice(1,3).join(' ') + ' ' + year
            monthlyChart[0].data.push({"x": condensedDate, "y": Number(x[1].toFixed(2))})
        }) 

        let yearlyRaw = (await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365`)).data.prices
        // console.log(yearly)
        let yearly = yearlyRaw.reverse().filter((x, i) => i % 16 === 0).reverse()
        console.log('this is yearly', yearly)
        const yearlyChart = 
        [{
            "id": "yearly",
            "color": "hsl(155, 70%, 50%)",
            "data": []
        }]
        // yearly.forEach(x => yearlyChart[0].data.push({"x": new Date(x[0]).toUTCString().split(' ').slice(1,4).join(' '), "y": Number(x[1].toFixed(2))}))
        yearly.forEach(x => {
            const temp = new Date(x[0]).toDateString().split(' ')
            const year = "'" + String(temp.slice(3)).split('').slice(2).join('')
            const condensedDate = temp.slice(1,3).join(' ') + ' ' + year
            yearlyChart[0].data.push({"x": condensedDate, "y": Number(x[1].toFixed(2))})
        }) 

        res.status(201).json({info, dailyChart, monthlyChart, yearlyChart, yearlyRaw})

    } else {
        console.log("get coin controller api didn't need to run")
        res.status(201).json("Using localstorage data")
    }

    // if (!info || !daily || !monthly || !yearly) {
    //     res.status(500).send("Could no retrieve data, please refresh.")
    // }

    // res.status(201).json({info, dailyChart, monthlyChart, yearlyChart, yearlyRaw})
    // res.status(201).json({info, yearlyRaw}) // erase this later
    // res.status(201).json({info}) // erase this later
}

exports.getTopCoins = async(req, res) => {

    const { getTopCoins } = req.params
    
    console.log("getTopCoins controller", getTopCoins)

    const truth = getTopCoins === "true"

    if (truth) { // not sure why but not working without truth statement
        console.log('topcoins gecko api request sent')
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
        
        if (response.data) {
            return res.status(201).json(response.data)
        } else {
            return res.status(500).send("Could not load data")
        }   
    } else {
        console.log('topcoins gecko api request NOT NEEDED')
        return res.status(201).json("Using localstorage data")
    }
}

exports.getAllCoins = async(req, res) => {

    const { getAllCoins } = req.params

    console.log("this is truth in controller" , getAllCoins)

    const truth = getAllCoins === "true"


    if (truth) {
        console.log('allcoins gecko api request sent')
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        
        if (response.data) {
            res.status(201).json(response.data)
        }
        else {
            res.status(500).send("Could not load data")
        }   
        
    } else {
        console.log('allcoins gecko api request NOT NEEDED')
        res.status(201).json("Using localstorage data")
    }
}

exports.txCoin = async(req, res) => {
    console.log('tx controller received ', req.body)
    const userId = req.user.id
    const { coinId, coinSymbol, coinImage, amount, price, date, type, total } = req.body

    if (type === 'sell') {
        let tx = await UserModel.findById(userId).populate('transactions')
        tx = tx.transactions.filter((x) => x.coinId == coinId && x.date <= date)
        let totalAmount = 0
        tx.forEach(x => {
            if (x.type == 'buy') {
                return totalAmount += x.amount
            } else { return totalAmount -= x.amount }
        })
        console.log(totalAmount)
        console.log(totalAmount)

        if (totalAmount < amount) {
            return res.status(401).send(`Total amount in portfolio on ${new Date(date).toDateString()} is less than sell amount.`)
        }
    }


    
    const coin = await CoinModel.create({
        userId: userId,
        coinId,
        coinSymbol,
        coinImage,
        amount,
        price,
        date,
        type: type === 'buy' ? 'buy' : 'sell',
        // type,
        total
    })
    
    const user = await UserModel.findByIdAndUpdate(coin.userId, {
        $push: {transactions: coin.id}
    },{new: true}).populate('transactions')

    const transactions = user.transactions.sort((a,b) => b.date - a.date)

    res.json(transactions)
}

exports.getTx = async(req, res) => {
    
    const userId = req.user.id 
    const user = await UserModel.findById(userId).populate("transactions")
    const transactions = user.transactions.sort((a,b) => b.date - a.date)
    // const sortedTransactions = transactions.sort((a,b) => a.date - b.date)
    res.json(transactions)
}


exports.deleteTx = async(req, res) => {
    // const userId = req.user
    const userId = req.user.id
    const { id } = req.params
    console.log(id)
    // const userId = "64211e27e309862615151ac6"

    // make sure to sort the tx by date

    await CoinModel.findByIdAndDelete(id)
    await UserModel.updateOne(
        {_id: userId},
        { $pull: { transactions: id}}
    )

    const user = await UserModel.findById(userId).populate('transactions')

    // const transactions = user.transactions.sort((a,b) => b.date - a.date)
    const transactions = user.transactions.sort((a,b) => b.date - a.date)

    res.json(transactions)
    // res.json(user.transactions)
}