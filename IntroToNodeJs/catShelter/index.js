const http = require('http')

const homePage = require('./views/home')
const siteCss = require('./css/site.css')


const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html',
    })

    switch (req.url) {
        case '/':
            res.write(homePage)
            break;

        case '/css/site.css':
         
            res.writeHead(200, {
                'content-type': 'text/css',
            })
            res.write(siteCss)


        default:
            `<h1>404<h1>`
            break;
    }


    res.end()

})

server.listen(5000)

console.log('Server is running on port 5000...');