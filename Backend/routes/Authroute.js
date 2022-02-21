const express = require ('express')
const router = express.Router()
const {signup,signin , fetchuser} = require('../controllers/AuthCon')

router.post('/signup',signup)
router.post('/signin',signin)
router.post('/fetchuser',fetchuser)
module.exports = router