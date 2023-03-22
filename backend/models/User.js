const mongoose = require("mongoose")

const UserSchema = mongoose.Schema(
    {
        userName: {
            type: String,
            require: [true, "Please enter username"]
        },
        email: {
            type: String,
            required: [true, "Please add email"],
            unique: [true, "A user with that email already exists"]
        },
        password: {
            type: String,
            required: [true, "Please add password"]
        },
    }
)

module.exports = mongoose.model("User", UserSchema)