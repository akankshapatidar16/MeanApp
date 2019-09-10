const path= require('path')
const express = require('express')
const user = require('./router/user.router')
const books = require('./router/books.router')
const bodyParser = require('body-parser')
const app = express()
app.use(express.static(path.join(__dirname, 'dist/angular')))
const port = 4000

//'Access-Control-Allow-Origin','*'
//'Access-Control-Allow-Headers','content-type'
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','http://localhost:4200')
    res.header('Access-Control-Allow-Headers','content-type')
    res.header('Access-Control-Allow-Methods','OPTIONS,GET,POST,DELETE,PUT')
    next()
});
app.use(bodyParser.json())
useNewUrlParser : true
app.use('/user', user)
app.use('/books', books)

app.listen(port, () => console.log("listening on port 4000"))


app.post('/authenticate', (req, res) => {
    console.log(req.body)
    res.sendStatus(300)
    res.send(req.body)
    res.end()

})
app.get('/', (req, res) => {
    console.log("we are inside base urll")
    res.send('hyee!!!!!')
})
app.get('/:id', (req, res) => {
    console.log(req.params)
    res.send(JSON.stringify({ "name": req.params.id }))
})

app.get('/country', (req, res) => {
    console.log(req.params)
    res.send(JSON.stringify({ "name": req.params.county }))
})