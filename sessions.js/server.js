// const express=require('express')
// const port = 3050;
// const session = require('express-session')


// const app = express;
// app.use(bodyParser.json())
// app.use(req,res,next) => {next()}


// app.use(session({
//     secret: 'supersherpa',
//     resave: flase,
//     saveUninitialized: false
// }))


// function auth(req, res, next){
//     const {username, password} = req.body
//     if (username==='mscott' && password === 'number1boss') {
//         next()
//     }else{
//         res.status(403).send('Nice Try....')
//     }
// }



// app.get('/api/employees', auth, (req, res) => {
//     res.status(200).send(employees)
// })



// app.listen(port, () => {
//     console.log( `listening on port: ${port}`)
// }