const fs = require('fs')

const readStream = fs.createReadStream('./data.txt', { encoding: 'utf-8' })

readStream.on('data', (chunk) => {
    console.log('=================== NEW STREAM ==========');

    console.log(chunk);
})


readStream.on('close', () => {

    console.log('Stream ends here!!');
})