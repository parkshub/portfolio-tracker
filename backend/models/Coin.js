const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
    userId: {
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
    coinImage: {
        type: String,
        required: [true, "Input image"]
    },
    price: {
        type: Number,
        required: [true, "Input price"]
    },
    amount: {
        type: Number,
        required: [true, "Input amount"]
    },
    total: {
        type: Number,
        required: [true, "Input total"]
    },
    date: {
        type: Number,
        require: [true, "Input date"]
    }, //https://mongoosejs.com/docs/tutorials/dates.html working with dates in mongoose
    type: {
        type: String,
        required: [true, "Input tx type"]
    }
});

module.exports = mongoose.model("Transaction", eventSchema)