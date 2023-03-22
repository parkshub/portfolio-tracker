const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
    userName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    coinId: {
        type: String,
        required: [true, "Input coin name"]
    },
    coinSymbol: {
        type: String,
        required: [true, "Input coin symbol"]
    },
    price: {
        type: Number,
        required: [true, "Input price"]
    },
    amount: {
        type: Number,
        required: [true, "Input amount"]
    },
    date: {
        type: Date,
        require: [true, "Input date"]
    } //https://mongoosejs.com/docs/tutorials/dates.html working with dates in mongoose
});

module.exports = mongoose.model("Event", eventSchema)