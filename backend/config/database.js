const mongoose = require("mongoose")
const colors = require("colors");

const connectDB = async() => {
    try {
        const connect = await mongoose.connect(process.env.DB_STRING)
        console.log(`MongoDB Connected: ${connect.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB