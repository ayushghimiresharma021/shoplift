const { Server } = require('http')
const app = require('./app')
const connectDatabase = require('./database/db')



process.on("uncaughtException" ,(err) => {
    console.log(`Error :${err.message}`)
    console.log(`shutting down the server `)
    
})

if (process.env.NODE_ENV !== 'PRODUCTION'){
    require('dotenv').config({
        path: 'config/.env',
    })
}

connectDatabase() ;

const server = app.listen(process.env.PORT,() => {
    console.log(`Server listening on ${process.env.PORT}`)
})

process.on('unhandledRejection',(err) =>{
    console.log(`Shutting down the server for ${err.message}`);
  console.log(`shutting down the server for unhandle promise rejection`)
    server.close(() => {
        process.exit(1) ;
    })
})