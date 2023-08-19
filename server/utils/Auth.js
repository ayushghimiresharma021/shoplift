const Jwt = require('jsonwebtoken') ;
const catchAsyncAndError = require('../middleware/catchAsyncAndError');
const ErrorHandler = require('./ErrorHandling');



const createVerifyTokens = (user) => {
    return Jwt.sign(user, process.env.ACTIVATION_SECRET,{
        expiresIn : "5m"
    })
}

const sendToken = (user,statuscode,res) =>{
    const userToken = user.getJwtToken()


    const options = {
        expires : new Date(Date.now()+90*60*60*1000),
        httpOnly: true,
        sameSite : "none",
        secure : true
    }

    res.status(statuscode).cookie('token', userToken,options).json({
        sucess: true,
        user,
        userToken
    })
} ;

exports.isAuthenticated = catchAsyncAndError(async(req,res,next) => {
    const {token} = req.cookies ;

    if (!token) {
        return next(new ErrorHandler('Please login to continue',401))
    }

    const decoded = Jwt.verify(token,process.env.JWT_SECRET_KEY)



})


exports.createVerifyTokens = createVerifyTokens
exports.sendToken = sendToken ;