const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload')
const cors = require('cors')
const multer = require('multer')
const User = require('./model/user')
const user = require('./controller/User')



app.use(cors({
    origin: process.env.LOCALHOST,
    credentials: true,

}))
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true })) ;
app.use('/', express.static('uploads/'))







if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({
        path: 'config/.env'
    })
}

app.use('/api/user',user)




module.exports = app;