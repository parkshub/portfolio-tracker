const express = require('express')
const router = express.Router()
const coinController = require('../controllers/coinController')

router.get('/', ()=>console.log('hello'))

module.exports = router