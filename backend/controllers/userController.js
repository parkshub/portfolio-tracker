const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const UserModel = require('../models/User')
const bcrypt = require("bcryptjs")

const generateToken = async(id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "7d"
    })
}


exports.registerUser = asyncHandler(async(req, res) => {
    console.log('controller received===', req.body)
    const { userName, email, password, password2 } = req.body

    if (!userName || !email || !password || !password2) {
        res.status(400).send("Please enter all fields")
    }

    else if (password !== password2) {
        res.status(400).send("Passwords do not match")
    }

    else if (await UserModel.findOne({email: email}) !== null) {
        res.status(400).send("User already exists")
    }

    else {

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = await UserModel.create({
            userName,
            email,
            password: hashedPassword
        })

        const token = await generateToken(user.id)

        return res.json({
            userName,
            // email,
            token
        })
    }
})

exports.loginUser = async(req, res) => {

    const { email, password } = req.body

    const user = await UserModel.findOne({email: email})

    if (!email || !password) {
        res.status(400).send("Please enter all fields")
    }

    else if (user === null || !await bcrypt.compare(password, user.password)) {
        res.status(400).send("Invalid credentials")
    }

    else {
        res.status(201).json({
            id: user.id,
            userName: user.userName,
            token: await generateToken(user.id)
        })
    }
}

exports.getUser = async(req, res) => {
    const user = await UserModel.findById(req.user.id).select('-password -email')
    res.json(user)
}