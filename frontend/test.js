const currDate = new Date()

let splitDate = currDate.toUTCString().split(' ')

splitDate[4] = '00:00:00'

const slicedDate = splitDate.slice(0,5)
slicedDate.push("UTC")
const joinedDate = slicedDate.join(' ')

const time = new Date(joinedDate).getTime()

console.log(time)