
///////////////////////////////////////////
// IF ITS A SELL ORDER JUST SUBTRACT FROM AMOUNT (ADD CONDITIONAL) LINE 23 AND 28 ISH
///////////////////////////////////////////
exports.generateLineData = (cache, uniqueCoinsUser, coins) => {

    console.log('generateLineData received coins', coins)

    if (coins.length == 0) { return '' }

    let transactionsRaw = []
    coins.forEach(x => transactionsRaw.push({[x.date]: {'amount': x.amount, 'price': x.price, 'total': x.total, 'coin': x.coinId, 'type': x.type}}))

    transactionsRaw = transactionsRaw.sort((a,b) => Object.keys(a) - Object.keys(b))

    const transactions = []
    
    transactionsRaw.forEach((x, i) => {
        const date = Number(Object.keys(x)[0])
        const name = x[date]['coin']
        
        if (transactions.length === 0 || !transactions.flat().includes(name)) {
            transactions.push([date, x[date]['amount'], x[date]['total'], name])
        } else {
            let newTransactions = transactions.filter(x => x[3] == name)            
            newTransactions = newTransactions[newTransactions.length - 1]
            if (x[date].type == 'sell') {
                transactions.push([date, newTransactions[1] - x[date]['amount'], newTransactions[2] - x[date]['total'], name])
            } else {
                transactions.push([date, x[date]['amount'] + newTransactions[1], x[date]['total'] + newTransactions[2], name])
            }
        }
    })


    const datesPriceCoin = {}
    uniqueCoinsUser.forEach(x => {
        datesPriceCoin[x] = {'years': cache[x].coin.yearlyRaw.reverse().filter((x, i) => i%16 === 0), 'months': cache[x].coin.yearlyRaw.reverse().slice(0,92).filter((x, i) => i%4 === 0).reverse()};
    })

    const netProfit = {'months': [], 'years': []}

    // console.log('transactions', transactions)

    uniqueCoinsUser.forEach((coinName, i) => {
        // console.log(coinName)
        if (i === 0) {
            datesPriceCoin[coinName]['months'].forEach(dayPrice => {
                
                let temp = transactions.filter(tx => tx[0] <= dayPrice[0] && tx.includes(coinName)).slice(-1)[0]
                temp = temp === undefined ? [0,0] : temp
                netProfit['months'].push({'x': dayPrice[0], 'y': dayPrice[1] * temp[1]})
            })

            datesPriceCoin[coinName]['years'].forEach(dayPrice => {
                // console.log('this is dayprice',dayPrice, coinName)
                let temp = transactions.filter(tx => tx[0] <= dayPrice[0] && tx.includes(coinName)).slice(-1)[0]
                // console.log('this is temp', temp)
                temp = temp === undefined ? [0,0] : temp
                netProfit['years'].push({'x': dayPrice[0], 'y': dayPrice[1] * temp[1]})
            })
            
        } else {
            datesPriceCoin[coinName]['months'].forEach(dayPrice => {
                let netProfitTemp = netProfit['months'].filter(f => Math.abs(f.x - dayPrice[0]) <= 86400000).slice(-1)[0]
                let idx = netProfit['months'].findIndex(x => {
                    return JSON.stringify(x) == JSON.stringify(netProfitTemp)
                })
                // here it's the same but you have to get fixnetprofit idx of arr that it less than one day apart
                let temp = transactions.filter(tx => tx[0] <= dayPrice[0] && tx.includes(coinName)).slice(-1)[0]
                // let temp = transactions.filter(tx => Math.abs(tx[0] - dayPrice[0]) <= 86400000 && tx.includes(coinName)).slice(-1)[0]
                netProfit['months'][idx].y += temp[1] * dayPrice[1]
            })

            datesPriceCoin[coinName]['years'].forEach(dayPrice => {
                let netProfitTemp = netProfit['years'].filter(f => Math.abs(f.x - dayPrice[0]) <= 86400000).slice(-1)[0]
                // console.log('first', netProfitTemp)
                let idx = netProfit['years'].findIndex(x => {
                    return JSON.stringify(x) == JSON.stringify(netProfitTemp)
                })
                // console.log('second', idx)
                // here it's the same but you have to get fixnetprofit idx of arr that it less than one day apart
                let temp = transactions.filter(tx => tx[0] <= dayPrice[0] && tx.includes(coinName)).slice(-1)[0]
                
                // let temp = transactions.filter(tx => Math.abs(tx[0] - dayPrice[0]) <= 86400000 && tx.includes(coinName)).slice(-1)[0]
                if (temp) { netProfit['years'][idx].y += temp[1] * dayPrice[1] }
            })

        }
    })
    

    netProfit.months.forEach((entry, i) => {
        // netProfit.months[i].x = new Date(entry.x).toDateString().split(' ').slice(1,4).join(' ')
        let temp = new Date(entry.x).toDateString().split(' ')
        let year = "'" + String(temp.slice(3)).split('').slice(2).join('')
        netProfit.months[i].x = temp.slice(1,3).join(' ') + ' ' + year
    })

    netProfit.years.forEach((entry, i) => {
        let temp = new Date(entry.x).toDateString().split(' ')
        // netProfit.years[i].x = new Date(entry.x).toDateString().split(' ').slice(1,4).join(' ')
        // console.log(temp.slice(3))
        let year = "'" + String(temp.slice(3)).split('').slice(2).join('')
        
        netProfit.years[i].x = temp.slice(1,3).join(' ') + ' ' + year
        // netProfit.years[i].x = new Date(entry.x).toDateString().split(' ').slice(1,4).join(' ')
    })

    // console.log('this is netprofit', netProfit)

    const totals = {}

    uniqueCoinsUser.forEach(coinName => {
        const tx = transactions.filter(x => x.includes(coinName)).slice(-1)[0]
        totals[coinName] = {'amount': tx[1], 'spent': tx[2] }
    })

    const currentPrices = {'spent': 0, 'now': 0}

    uniqueCoinsUser.forEach(coinName => {
        currentPrices['spent'] += totals[coinName].spent
        currentPrices['now'] += cache[coinName].coin.dailyChart[0].data.slice(-1)[0].y * totals[coinName].amount
    })

    const profit = ((currentPrices.now - currentPrices.spent) / currentPrices.spent * 100).toFixed(1) + '%'
    const overview = {profit: Number((currentPrices.now - currentPrices.spent).toFixed(2)), profitPercent: profit, 'allocated': Number(currentPrices.spent.toFixed(2)), 'currentValue': Number(currentPrices.now.toFixed(2))}
    // console.log('this is overview', overview)

    const dailyProfitRaw = {}
    uniqueCoinsUser.forEach(coinName => {
        cache[coinName].coin.dailyChart[0].data.forEach(data => {
            if (!dailyProfitRaw[coinName]) {
                dailyProfitRaw[coinName] = []
            }
            dailyProfitRaw[coinName].push(data.y * totals[coinName].amount)
        })
    })

    const dailyProfit = []

    // console.log('these are totals', totals)
    
    Object.values(dailyProfitRaw).forEach((coinProfit, i) => {
        coinProfit.forEach((profit, j) => {
            if (i == 0) {
                dailyProfit.push(profit)
            } else {
                dailyProfit[j] += profit
            }
        })
        // console.log('hello ', coinProfit)
    })

    

    const dailyData = cache[uniqueCoinsUser[0]].coin.dailyChart[0].data.map((day, i) => {
        // return {'x': day.x, 'y': Number(dailyProfit[i].toFixed(2))}
        return {'x': day.x.split(':').slice(0,2).join(':'), 'y': Number(dailyProfit[i].toFixed(2))}
    })
    
    const yearlyLineData = [{
        "id": 'yearly',
        "color": "hsl(68, 70%, 50%)",
        // "data": yearlyData
        "data": netProfit.years
    }]

    const monthlyLineData = [{
        "id": 'monthly',
        "color": "hsl(68, 70%, 50%)",
        // "data": monthlyData
        "data": netProfit.months
    }]

    const dailyLineData = [{
        "id": 'daily',
        "color": "hsl(68, 70%, 50%)",
        "data": dailyData
        // "data": fixNetProfit.monthly
    }]

    // console.log(yearlyLineData, monthlyLineData, dailyLineData)

    return {'yearly': yearlyLineData, 'monthly': monthlyLineData, 'daily': dailyLineData, overview}
}