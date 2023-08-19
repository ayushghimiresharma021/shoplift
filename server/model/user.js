
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Please enter a name']
    },
    email:{
        type: String,
        required: [true,'Please enter a email']
    },
    password:{
        type: String,
        required: [true,'Please enter a password'],
        minLength: [5,'please enter a password of 5 characters'],
    },
    avatar:{
        type: String,
        required: true
    }
    
})



userSchema.methods.getJwtToken = function() {
    return jwt.sign({id:this._id},process.env.JWT_SECRET_KEY,{
        expiresIn : process.env.JWT_EXPIRES
    })
}

const User = mongoose.model('User',userSchema) ;

module.exports = User