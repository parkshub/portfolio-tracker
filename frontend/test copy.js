const test = [1,2,3,4]

console.log(test.slice(2))


netProfit.months.forEach((entry, i) => {
    let temp = new Date(entry.x).toDateString().split(' ')
    let year = "'" + String(temp.slice(3)).split('').slice(2).join('')
    netProfit.months[i].x = temp.slice(1,3).join(' ') + ' ' + year


    
    // netProfit.months[i].x = new Date(entry.x).toDateString().split(' ').slice(1,4).join(' ')
})

netProfit.months.forEach((entry, i) => {
    let temp = new Date(entry.x).toDateString().split(' ')
    // netProfit.years[i].x = new Date(entry.x).toDateString().split(' ').slice(1,4).join(' ')
    // console.log(temp.slice(3))
    let year = "'" + String(temp.slice(3)).split('').slice(2).join('')
    
    netProfit.years[i].x = temp.slice(1,3).join(' ') + ' ' + year
})