const express = require('express')
const router = express.Router()
const coinController = require('../controllers/coinController')

router.get('/', ()=>console.log('hello'))

router.get('/getCoin/:id', coinController.getCoin)
router.get('/getTopCoins', coinController.getTopCoins)
router.get('/getAllCoins', coinController.getAllCoins)


router.post('/test', coinController.test)

router.post('/testCoin/:id', coinController.testCoin)

router.post('/txCoin', coinController.txCoin)

router.get('/getTx', coinController.getTx)

router.delete('/deleteTx/:id', coinController.deleteTx)


module.exports = router