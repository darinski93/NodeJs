const http = require('http')
const fs = require('fs/promises')
const path = require('path')


const cats = require('./cats.json')
// const siteCss = require('./css/site.css.js')




const server = http.createServer(async (req, res) => {

    res.writeHead(200, {
        'content-type': 'text/html',
    })

    if (req.url == '/') {
        const homePage = await readFile('./views/home.html')

        res.write(homePage)

    } else if (/cats\/\d+\/edit/.test(req.url)) {
        let catId = req.url.split('/')[2];
        let cat = cats.find(x => x.id == catId);
        // res.write(catShelter(cat))

    }


    else if (req.url == '/css/site.css') {

        res.writeHead(200, {
            'content-type': 'text/css',
        })

        const siteCss = await readFile('./content/styles/site.css')
        res.write(siteCss)


    } else if (req.url == '/cats/add-breed') {

        // res.write(addBreed)

    } else {
        // `<h1>404<h1>`
    }


    res.end()

})


function readFile(path) {

    return fs.readFile(path, { encoding: 'utf-8' })

}

server.listen(5000)

console.log('Server is running on port 5000...');