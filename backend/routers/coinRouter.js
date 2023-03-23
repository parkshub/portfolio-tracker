const express = require('express')
const router = express.Router()
const coinController = require('../controllers/coinController')

router.get('/', ()=>console.log('hello'))

router.get('/getCoin', coinController.getCoin)
router.get('/getTopCoins', coinController.getTopCoins)
router.get('/getAllCoins', coinController.getAllCoins)


module.exports = router