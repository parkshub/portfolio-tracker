exports.generateLineData = (cache, uniqueCoinsUser, coins) => {

    if (coins.length == 0) { return '' }

    // later change hardcoded bitcoin to uniqueCoinsUser[0]
    
    console.log('function got', cache, uniqueCoinsUser, coins)

    let transactionsRaw = []
    coins.forEach(x => transactionsRaw.push({[x.date]: {'amount': x.amount, 'price': x.price, 'total': x.total, 'coin': x.coinId, 'type': x.type}}))

    transactionsRaw = transactionsRaw.sort((a,b) => Object.keys(a) - Object.keys(b))

    // console.log('this is transactionsRaw ', transactionsRaw)

    const transactions = []
    
    transactionsRaw.forEach((x, i) => {
        const date = Number(Object.keys(x)[0])
        const name = x[date]['coin']
        
        if (transactions.length === 0 || !transactions.flat().includes(name)) {
            transactions.push([date, x[date]['amount'], x[date]['total'], name])
        } else {
            let newTransactions = transactions.filter(x => x[3] == name)            
            newTransactions = newTransactions[newTransactions.length - 1]

            transactions.push([date, x[date]['amount'] + newTransactions[1], x[date]['total'] + newTransactions[2], name])
        }
    })


    const datesPriceCoin = {}
    uniqueCoinsUser.forEach(x => {
        datesPriceCoin[x] = {'years': cache[x].coin.yearlyRaw.reverse().filter((x, i) => i%16 === 0), 'months': cache[x].coin.yearlyRaw.reverse().slice(0,92).filter((x, i) => i%4 === 0)};
    })

    console.log(cache['bitcoin'].coin.yearlyRaw.reverse().slice(0,92).filter((x, i) => i%4 ))
    

    const netProfit = {}
    // console.log('this is dates price coin', datesPriceCoin)
    // datespricecoin has price of all coins for each monthly and yearly
    uniqueCoinsUser.forEach(coin => {

        datesPriceCoin[coin]['years'].forEach((yearDay) => {
            if (!netProfit[coin]) { 
                netProfit[coin] = {
                    'years': []}
            }
            let lastTx = transactions.filter(tx => tx.includes(coin)).filter(tx => tx[0] <= yearDay[0]).slice(-1).flat()

            let profit = lastTx.length ? Number((yearDay[1] * lastTx[1]).toFixed(2)) : 0
            let date = String(new Date(yearDay[0])).split(' ').slice(1, 4).join(' ')
            
            netProfit[coin]['years'].push({'x': date, 'y': profit})
        })

        datesPriceCoin[coin]['months'].forEach((monthDay, i) => {
            if (!netProfit[coin] || !netProfit[coin]['months']) { 
                netProfit[coin]['months'] = []
                
            }

            let lastTx = transactions.filter(tx => tx.includes(coin)).filter(tx => tx[0] <= monthDay[0]).slice(-1).flat()

            let profit = lastTx.length ? Number((monthDay[1] * lastTx[1]).toFixed(2)) : 0
            let date = String(new Date(monthDay[0])).split(' ').slice(1, 4).join(' ')
            
            netProfit[coin]['months'].push({'x': `${i} ${date}`, 'y': profit})
            // netProfit[coin]['months'].push({'x': date, 'y': profit})
        })
    })

    console.log('this is datepricecoin' ,datesPriceCoin)

    //netProfit has how much profit for each coin monthly and yearly

    const yearProfit = {}

    uniqueCoinsUser.forEach(coin => {
        netProfit[coin]['years'].forEach(dayPrice => {
            // console.log('this is payprice ', dayPrice)
            if (!yearProfit[dayPrice.x]) { yearProfit[dayPrice.x] = dayPrice.y}
            else { yearProfit[dayPrice.x] += dayPrice.y }
        })
    })

    const monthProfit = {}

    uniqueCoinsUser.forEach(coin => {
        netProfit[coin]['months'].forEach(dayPrice => {
            // console.log('this', dayPrice)
            if (!monthProfit[dayPrice.x]) { monthProfit[dayPrice.x] = dayPrice.y}
            else { monthProfit[dayPrice.x] += dayPrice.y }
        })
    })

    console.log('netprofit ', netProfit['bitcoin']['months'], netProfit['ethereum']['months'])

    // console.log('this is monthprfot', monthProfit)

    const yearlyData = Object.entries(yearProfit).map(data => {
        return {x: data[0], y: Number(data[1].toFixed(2))}
    })



    const monthlyData = Object.entries(monthProfit).map(data => {
        // console.log('this', data)
        return {x: data[0], y: Number(data[1].toFixed(2))}
    })

    const totals = {}
    transactions.forEach(tx => {
        if (!totals[tx[3]]) { totals[tx[3]] = {'amount': tx[1], 'spent': tx[2]} }
        else { 
            totals[tx[3]]['amount'] += tx[1] 
            totals[tx[3]]['spent'] += tx[2]
        }
    })

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
        return {'x': day.x, 'y': Number(dailyProfit[i].toFixed(2))}
    })
    
    const yearlyLineData = [{
        "id": 'yearly',
        "color": "hsl(68, 70%, 50%)",
        "data": yearlyData
    }]

    const monthlyLineData = [{
        "id": 'monthly',
        "color": "hsl(68, 70%, 50%)",
        "data": monthlyData
    }]

    const dailyLineData = [{
        "id": 'daily',
        "color": "hsl(68, 70%, 50%)",
        "data": dailyData
    }]

    return {'yearly': yearlyLineData, 'monthly': monthlyLineData, 'daily': dailyLineData}
}