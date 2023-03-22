const express = require('express')
const cors = require('cors')
const path = require('path')
const connectDB = require('./config/database')
require('dotenv').config({path: "./backend/config/.env"})

connectDB()

const userRouter = require('./routers/userRouter')
const coinRouter = require('./routers/coinRouter')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.use('/api/user', userRouter)
app.use('/api/coin', coinRouter)

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on post ${process.env.PORT}`)
})