

const express = require('express')
const router = express.Router()
const data = require('./Authroute')
const note = require('./Notesroutes')

router.use('/auth',data)
router.use('/notes',note)
module.exports = router