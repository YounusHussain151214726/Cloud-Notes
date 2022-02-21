const express =require('express')
const cors = require('cors')
const bdy = require('body-parser')
const app = express()
const mongoose=require('mongoose')

const mainroute = require('./routes/Mainroutes')
const auth = require('./modules/UserSchema')
const not = require('./modules/NotesSchema')
const port = 1122;


app.use(cors());
app.use(bdy.urlencoded({
    extended:false
}))
app.use(bdy.json())
app.use(mainroute)
mongoose.connect('mongodb+srv://younus:younusnotes@cluster0.hjl0z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on("connected",()=>{
    console.log(' Db connected')
})

mongoose.connection.on("Error",()=>{
    console.log("not connected")
})

app.get('/',(req,res)=>{
    res.send('Sapi')
})

// app.post('/signup',(req,res)=>{
// let createuser = usermod ({Name:req.body.Name , Email : req.body.Email , Password : req.body.Password})
// res.send(createuser)
// })



app.listen(port , ()=>{
    console.log('Runing...')
})