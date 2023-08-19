const app = require('../app')
const mongoose = require('mongoose') ;


const connectDatabase = () => {
    mongoose.connect('mongodb+srv://ayushghimire95:admin@cluster0.z9m6bqp.mongodb.net/shoplift').then((data) => {
        console.log(`Server is successfully connected to ${data.connection.host}`)
    })
}
module.exports = connectDatabase ;