const express = require('express')

const app = express()

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

app.get('/dogs', (req, res) => {
    res.send(`<h1>Dogs Page </h1>
    <a href="/">Home</a>
    <a href="/cats">Cats</a>

    `)
})

app.post('/cats', (req,res) =>{
    res.send('cat received')
})

app.put('/cats', (req,res) =>{
    res.send('cat is updated')
})

app.delete('/cats', (req, res) =>{
    res.send('cat is deleted')
})

app.listen(5000, () => console.log('Server is running on port 5000...'));