const express = require('express')
const router = express.Router()
const coinController = require('../controllers/coinController')
const auth = require('../middleware/authMiddleware')

router.get('/', ()=>console.log('hello'))

router.get('/getCoin/:id/:getAll', coinController.getCoin)
// router.get('/getCoin/:id', coinController.getCoin)

router.get('/getTopCoins', coinController.getTopCoins)
router.get('/getAllCoins', coinController.getAllCoins)


router.post('/test', coinController.test)
router.post('/testCoin/:id', coinController.testCoin)


router.get('/getTx', auth, coinController.getTx)
router.post('/txCoin', auth, coinController.txCoin)
router.delete('/deleteTx/:id', auth, coinController.deleteTx)




module.exports = router