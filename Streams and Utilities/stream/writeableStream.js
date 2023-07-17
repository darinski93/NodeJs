const fs = require('fs')

const writeStream = fs.createWriteStream('./stream/output.txt', { encoding: 'utf-8', flags: 'a' })


const chunk1 = 'Pesho'
const chunk2 = 'Gosho'
const chunk3 = 'Ivan'

writeStream.write(chunk1 + '\n')
writeStream.write(chunk2 + '\n')
writeStream.write(chunk3 + '\n')


writeStream.on('close', () => {
    console.log('Krai!');
})

writeStream.end()
