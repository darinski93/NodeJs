const express = require('express')


const loggerMiddleware = require('./loggerMiddleware')


const app = express()

app.use(loggerMiddleware)

app.get('/', (req, res) => {
    res.send(`<h1>Hello from Express!</h1>
    <a href="/cats">Cats</a>
    <a href="/dogs">Dogs</a>

    
    `)
})

app.get('/cats', (req, res) => {
    res.send(`<h1>Cats Page</h1>
    <a href="/">Home</a>
    <a href="/dogs">Dogs</a>

    `)
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
        res.send('Invalid CatId!!')
    } else {
        next()
    }
}

app.get('/cats/:catId', validateCatId, (req, res) => {

    res.send(`<h1>Individual Cat Page catId= ${req.params.catId}</h1>`)
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