const mongoose = require('mongoose')

const NotesSchema = mongoose.Schema({
user :{
type : mongoose.Schema.Types.ObjectId,
ref :'user'
},
    title : {type:String ,
    required : true},
    description :{type:String
    , required :true},
    tag :{type:String
    , required : true},
    Date : {type:Date ,
    default : Date.now}
})

const notemodal = mongoose.model('Notes',NotesSchema)
module.exports = notemodal