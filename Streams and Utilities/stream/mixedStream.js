const fs = require('fs')


const readStream = fs.createReadStream('./stream/data.txt')
const writeStream = fs.createWriteStream('./stream/data-copy.txt')

readStream.on('data', (chunk) => {
    console.log('Writestream here!!');
    writeStream.write(chunk)
})

readStream.on('close', () => {
    writeStream.end()
})