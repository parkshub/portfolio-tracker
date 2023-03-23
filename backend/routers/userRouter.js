const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const auth = require('../middleware/authMiddleware')

router.post('/registerUser', userController.registerUser)
router.post('/loginUser', userController.loginUser)
router.get('/getUser', auth, userController.getUser)

module.exports = router