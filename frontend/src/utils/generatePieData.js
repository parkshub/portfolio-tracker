exports.generatePieData = (coins) => {

    if (coins.length === 0) { return '' }

    function generateHslaColors (saturation, lightness, alpha, amount) {
        // https://mika-s.github.io/javascript/colors/hsl/2017/12/05/generating-random-colors-in-javascript.html
        let colors = []
        let huedelta = Math.trunc(360 / amount)
      
        for (let i = 0; i < amount; i++) {
          let hue = i * huedelta
          colors.push(`hsla(${hue},${saturation}%,${lightness}%,${alpha})`)
        }
      
        return colors
      }
    
    const cache = {}
    let total = 0

    coins.forEach(coin => {
        if (cache[coin.coinId] !== undefined) {
            if (coin.type === "sell") {
                cache[coin.coinId] -= coin.total
                total -= coin.total
            }
            else {
                cache[coin.coinId] += coin.total
                total += coin.total
            }
        } else {
            if (coin.type === "sell") {
                cache[coin.coinId] = -coin.total
                total -= coin.total
            }
            else {
                cache[coin.coinId] = coin.total
                total += coin.total
            }
        }
    })

    const data = []

    const colors = generateHslaColors(10,100,1.0,5, Object.values(cache).length)

    Object.entries(cache).forEach((x, i) => data.push(
        {
            id: x[0].charAt(0).toUpperCase() + x[0].slice(1),
            label: x[0].charAt(0).toUpperCase() + x[0].slice(1),
            value: ((x[1]/total)*100).toFixed(1),
            color: colors[i]

        }
    ))

    return data.sort((a,b) => b.value - a.value)


    // return data
}