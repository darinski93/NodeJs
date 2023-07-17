const fs = require('fs')

fs.writeFile('./fs/output.txt', 'Pesho', ()=>{
    console.log('file created');
})