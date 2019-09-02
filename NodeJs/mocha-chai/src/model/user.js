const mogoose = require('mongoose')
const userSchema = new mogoose.Schema({
    name:{
        type: String,
        required : true,
        trim:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    age:{
        type:Number,
        default:18
    }
})
const User = mogoose.model('User',userSchema)
module.exports=User;