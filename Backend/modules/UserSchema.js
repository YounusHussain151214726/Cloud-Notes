const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
user :{
type:mongoose.Schema.Types.ObjectId,
ref : 'user'
},

    Name : {type:String ,
    required : true},
    Email :{type:String
    , required :true},
    Password  :{type:String
    , required : true},
    Date : {type:Date ,
    default : Date.now}
})

const usermodal = mongoose.model('Users',UserSchema)
module.exports = usermodal