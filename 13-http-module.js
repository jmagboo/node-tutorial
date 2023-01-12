const http = require('http');
const server = http.createServer((req, res)=>{
    // console.log(server)
    if(req.url === '/'){
        res.end('Hello Jastine')
    }
    // res.write('Hello Jastine')
    // res.end()
    if(req.url === '/about'){
        res.end('All about me')
    }
    if(req.url === '/home'){
        res.end('This is my Home')
    }

res.end(`<h1> Ooopss </h1>
<p> We cant seem to find the page that you are looking for</p>
<a href="/">back home</a> `)
})

server.listen(5000)