const jwt = require("jsonwebtoken") 
const UserModel = require("../models/User")
const asyncHandler = require("express-async-handler")

const auth = asyncHandler(async(req, res, next)=> {
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            console.log("authorization middleware")
            let token = req.headers.authorization.split(" ")[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await UserModel.findById(decoded.id).select("-password -email")
            next()
        } catch (err) {
            console.log(err)
            res.status(401).send("Invalid credentials")
        }
    }
})

module.exports = auth