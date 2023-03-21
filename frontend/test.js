const getDateArray = function(timeFrame="daily") {
  
  const end = new Date()
  let start;
  const arr = {"daily": [], "monthly": [], "yearly": []}
  
  start = new Date(end)
  start.setHours(start.getHours() - 24)

  while (start <= end) {
    arr.daily.push(new Date(start));
    start.setHours(start.getHours() + 1);
  }


  start = new Date(end)

  // start.setUTCHours(00)

  start.setHours(0, 0, 0, 0)
  console.log(start)

  start.setDate(start.getDate() - 91)

  while (start <= end) {
    arr.monthly.push(new Date(start));
    start.setDate(start.getDate() + 4);
  }

  start = new Date(end)
  start.setDate(start.getDate() - 365)

  while (start <= end) {
    arr.yearly.push(new Date(start));
    start.setDate(start.getDate() + 16);
  }

  return arr
}


// let test = new Date()
// console.log(test)
// let a = new Date(1678320000000)
// console.log(new Date(1679308503658).toUTCString())


const dailyChart = 
{
    "id": "daily",
    "color": "hsl(155, 70%, 50%)",
    "data": []
}

console.log(dailyChart)
