const mongoose = require('mongoose')

const Test = new mongoose.Schema({
    users: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User"
    }
})

module.exports = mongoose.model("Test", Test)