require('dotenv').config()
const express = require('express')
// const axios = require('axios')
const massive = require('massive')
const bodyParser = require('body-parser')
const ctrl = require('./controller')
const connectionString= process.env.CONNECTION_STRING='postgres://qpalqlhtabzojg:1f00769390a096ac241c81073930ab2fc14e558244f509402b10bc3603d7acb7@ec2-54-221-210-97.compute-1.amazonaws.com:5432/delqe8tn3ipl9f?ssl=true'
const session = require('express-session')


require('dotenv').config()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(session({
    secret: 'blahblah',
    resave: false,
    saveUninitialized: true                    
}))

// app.get('/api/products', ctrl.getProducts)
app.post('/api/userlogin', ctrl.uLogin)
app.get('/api/getuserdata', ctrl.userData)
app.post('/api/filterstuff', ctrl.filterInfo)
app.post('/api/userregister', ctrl.userregister)
app.post('/api/complete', ctrl.userComplete)
app.delete(`/api/dashboard/:id`, ctrl.deleteStuff)
// app.put('/api/shelf/:id/bin/:bin', ctrl.deleteProduct)


const SERVER_PORT = 5000

massive(connectionString).then(connection => {
    app.set('db', connection)
    console.log("DB is connected")  
})


app.listen(SERVER_PORT, () => {
    console.log(`Mr Smith lives on ${SERVER_PORT}`)
})