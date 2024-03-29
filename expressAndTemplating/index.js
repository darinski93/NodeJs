const express = require('express')
const { engine } = require('express-handlebars')


const loggerMiddleware = require('./loggerMiddleware')


const app = express()
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use(loggerMiddleware)

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/old', (req, res) => {
    res.send(`
    <html>
    <head>
    <link rel="stylesheet" href="/css/style.css" />
    </head>
    <body>
    
    </body>
    <h1>Hello from Express!</h1>
    <a href="/cats">Cats</a>
    <a href="/dogs">Dogs</a>

    
    </html>
   
    
    `)
})

app.get('/cats', (req, res) => {

    const cats = [
        { name: 'Nikolaycho', breed: 'Ulichna', age: 10 },
        { name: 'Billy', breed: 'Persian', age: 6 },
        { name: 'Marijka', breed: 'Angora', age: 7 }

    ]

    res.render('cats', { cats })
})



app.get('/json', (req, res) => {
    res.json({ ok: true, text: 'Hello from Json' })
})

app.get('/redirect', (req, res) => {
    res.redirect('/redirected')
})

app.get('/redirected', (req, res) => {
    res.send('This is redirected page')
})


let validateCatId = (req, res, next) => {

    let catId = Number(req.params.catId)

    if (!catId) {
       return  res.send('Invalid CatId!!')
    }

    req.catId = catId

    next()

}

app.get('/cats/:catId', validateCatId, (req, res) => {

    // res.send(`<h1>Individual Cat Page catId= ${req.params.catId}</h1>`)
    res.render('cat', { id: req.params.catId, isOdd : req.catId % 2 !== 0 })
})

app.get('/dogs', (req, res) => {
    res.send(`<h1>Dogs Page </h1>
    <a href="/">Home</a>
    <a href="/cats">Cats</a>

    `)
})

app.post('/cats', (req, res) => {
    res.send('cat received')
})

app.put('/cats', (req, res) => {
    res.send('cat is updated')
})

app.delete('/cats', (req, res) => {
    res.send('cat is deleted')
})

app.get('*', (req, res) => {
    res.send('404')
})

app.listen(5000, () => console.log('Server is running on port 5000...'));