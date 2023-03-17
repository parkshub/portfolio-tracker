// id and symbol
let test = 'bitcoin'
let coinsState = [{id: "bitcoin", symbol: "btc"}, {id: "ethereum", symbol:"eth"}, {id: "binancecoin", symbol: "bnb"}]

console.log(coinsState.filter(x => x.id.includes('bit') || x.symbol.includes('bit')))