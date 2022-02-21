const express = require ('express')
const router = express.Router()
const {Addnotes,fetchnotes ,updatenotes,deletenotes} = require('../controllers/NotesCon')

router.get('/fetchnotes',fetchnotes)
router.post('/Addnotes',Addnotes)
router.delete('/deletenotes/:id',deletenotes)
router.put('/updatenotes/:id',updatenotes)

module.exports = router