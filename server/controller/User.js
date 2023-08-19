const path = require('path')
const User = require('../model/user')
const express = require('express');
const router = express.Router();
const createUser = require('../controller/User');
const ErrorHandler = require('../utils/ErrorHandling');
const multer = require('multer');
const storage = multer({ dest: './uploads/' })
const bcrypt = require('bcrypt');
const fs = require('fs');
const renameTheAvatar = require('../config/logic');
const { createVerifyTokens, sendToken } = require('../utils/Auth');
const sendMail = require('../utils/mailConfig');
const catchAndAsync = require('../middleware/catchAsyncAndError')
const jwt = require('jsonwebtoken');
const catchAsyncAndError = require('../middleware/catchAsyncAndError');


router.post('/create-user', storage.single('file'), async (req, res, next) => {
    const { name, email, password } = req.body
    const userEmail = await User.findOne({ email: email })

    if (userEmail) {
        const filename = req.file.filename
        const filePath = `uploads/${filename}`
        fs.unlink(filePath, (err) => {
            if (err) {
                console.log(err)
                res.status(500).json({ message: 'Error deleting files' })
            }
        })
        return next(new ErrorHandler('User already exits', 500));
    }

    const newFileName = renameTheAvatar(req);
    const addedUser = {
        name: name,
        email: email,
        password: password,
        avatar: newFileName
    }


    const newToken = createVerifyTokens(addedUser)
    const activationLink = `http://localhost:3000/activation/${newToken}`;


    try {
        await sendMail({
            email: addedUser.email,
            subject: 'Activate Your Account',
            message: `Hello ${addedUser.name} please link on the following link to activate your account : ${activationLink}`

        })
    } catch (error) {
        return next(new ErrorHandler(error.message, 500))
    }

    res.status(201).json({ success: true, message: `Please Check Your email : ${addedUser.email} to activate your account.` })
})

router.post('/activation', catchAndAsync(async (req, res, next) => {
    try {
        const { activation_token } = req.body
        const newUsers = jwt.verify(
            activation_token,
            process.env.ACTIVATION_SECRET
          );
        if (!newUsers) {
            return next(new ErrorHandler('Invalid token', 400));
        }

        const { name, email, password, avatar } = newUsers

        let user = await User.findOne({email})
        if(user) {
            return next(new ErrorHandler('User already exists',400))

        }

        const hashPassword = await bcrypt.hash(password,10)

        const addedUser = {
            name: name,
            email: email,
            password: hashPassword,
            avatar: avatar
        }
        const newUser = await User.create(addedUser)
        sendToken(newUser,201,res)

    } catch (error) {
        return next(new ErrorHandler(error.message,400))
    }
}))
router.post('/login-user', catchAsyncAndError(async(req,res, next) => {
    try {
        const {email,password} = req.body
        if (!email || !password) {
            return next(new ErrorHandler('Please provide all fields!',400))
        }
        const user = await User.findOne({email:email})        

        if (!user) {
            return next (new ErrorHandler(`User doesn't exists!`, 400))
        }
        const pwd = await bcrypt.compare(password, user.password)
        console.log(pwd)
        if (!pwd) {
            return next(new ErrorHandler('Please enter correct information', 400))
        }

        sendToken(user,201,res)

    } catch (error) {
        console.log(error.message)
        return next(new ErrorHandler(error.message,500 ))
    }
}) )

module.exports = router









