const ErrorHandler = require('../utils/ErrorHandling');
const errorHandler  = require('../utils/ErrorHandling')

module.exports = (err,req,res,next) => {
    err.statuscode = err.statuscode || 500
    err.message = err.message || "Internal server Error" ;

    if(err.name == 'CastError'){
        const message = `Resources  not found with this id.. Invalid ${err.path}`
        err = new ErrorHandler(message,400) ;
    }
    if(err.code === 11000){
        const message =  `Duplicate key ${Object.keys(err.keyValue)} Entered` ;
        err = new ErrorHandler(message,400) ;
    }
    if (err.name === 'JsonWebTokenError'){
        const message = `Your Url is invalid please try again ` ;
        err = new ErrorHandler(message,400) ;
    }
    if (err.name === 'TokenExpiredError'){
        const message = `Your url is invalid please try again` ;
    }
    res.status(err.statucode).json({
        success : true,
        message : err.message
    })
}