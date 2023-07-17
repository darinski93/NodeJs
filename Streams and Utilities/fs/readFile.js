const fs = require('fs')
const fsp = require('fs/promises')


// Synchronous reading from file

const text = fs.readFileSync('./fs/text.txt', { encoding: 'utf-8' })
console.log(text)
console.log('Read from file')

// Asynchronous reading from file

fs.readFile('./fs/text.txt', { encoding: 'utf-8' }, (err, data) => {

    if (err) {
        return
    }
    console.log(data)
})

console.log('Read from file')


//Asynchronous reading with promises

fsp.readFile('./fs/text.txt', { encoding: 'utf-8' })
    .then(result => {
        console.log(result);
    })