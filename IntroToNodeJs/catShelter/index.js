const http = require('http')


const cats = require('./cats.json')
const homePage = require('./views/home.js')
const siteCss = require('./css/site.css.js')
const addBreed = require('./views/addBread')
const editCat = require('./views/editCat')



const server = http.createServer((req, res) => {

    res.writeHead(200, {
        'content-type': 'text/html',
    })

    if (req.url == '/') {
        res.write(homePage)

    } else if(/cats\/d+\/add-bread/.test(req.url)){

        let catId = req.url.split('/')[2]
        let cat = cats.find(x => x.id === catId)
        res.write(editCat(cat))

    }
    
    
    else if(req.url == '/css/site.css') {

        res.writeHead(200, {
            'content-type': 'text/css',
        })
        res.write(siteCss)


    } else if (req.url == '/cats/add-breed') {

        res.write(addBreed)

    } else {
        `<h1>404<h1>`
    }


    res.end()

})

server.listen(5000)

console.log('Server is running on port 5000...');